import React, { Component } from 'react'
import { connect } from 'react-redux'

import {updateCustomer} from '../store/actions/index'


class EditCustomer extends Component {
  constructor(props){
    super(props);
    this.state={
      customerName:'',
      customerEmail:'',
      customerPhone:'',
      customerGender:'',
    }
  }
  

  componentDidMount(){

    const cus_id = this.props.match.params.id
    const cus_details = this.props.customers.find(cus => {
      return cus.id == cus_id
    })

    this.setState({
      customer_id:cus_id,
      customerName : cus_details.name,
      customerEmail : cus_details.email,
      customerPhone : cus_details.phone,
      customerGender : cus_details.gender,
  

    })

  }

  handlecustomerNameChange = event => {
    this.setState({
      customerName:event.target.value
    })
  }

  handlecustomerEmailChange = event => {
    this.setState({
      customerEmail:event.target.value
    })
  }

  handlecustomerPhoneChange = event => {
    this.setState({
      customerPhone:event.target.value
    })
  }

  handleGenderChange = event => {
      this.setState({
        customerGender:event.target.value
      })
  }


  updateCustomer = (e) => {
    e.preventDefault();

    const updatedDetails = {
      name:this.state.customerName,
      email:this.state.customerEmail,
      phone:this.state.customerPhone,
      gender:this.state.customerGender,
      id:this.state.customer_id,

    }

    this.props.updateCustomerDetails(updatedDetails,this.state.customer_id)
  }


  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.updateCustomer}>
            <h1 style={{marginLeft:'40px', color:'white'}} > Edit Customer Informations</h1>

            <input
              placeholder="Name"
               value={this.state.customerName}
                onChange={this.handlecustomerNameChange}
              type="text"
              ref="nameInput"

            />

            <input
              placeholder="Email"
                value={this.state.customerEmail}
                onChange={this.handlecustomerEmailChange}
              type="text"
              ref="emailInput"

            />

            <input
              placeholder="Phone"
                value={this.state.customerPhone}
                onChange={this.handlecustomerPhoneChange}
              type="text"
              ref="phoneInput"

            />


            <select className="selectBox"
               value={this.state.customerGender}
                onChange={this.handleGenderChange}
              ref='genderInput' defaultValue={this.state.customerGender}>
              <option value="male">Male</option>
              <option value="female">Female</option>

            </select>

            <button type="submit" >Update Customer</button>
          </form>
        </header>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

    customers: state.customers.customers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCustomerDetails: (data, id) => dispatch(updateCustomer(data, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);