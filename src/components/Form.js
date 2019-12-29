import React from 'react'
import '../../src/App.css';

import { connect } from 'react-redux'

import { addCustomer } from '../store/actions/index'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            customerName: '',
            customerId: '',
            customerEmail: '',
            customerPhone: '',
            customerGender: '',
        }
    }

    addCustomer = e => {
        e.preventDefault()
    
        const { customerName, customerId, customerEmail, customerPhone, customerGender } = this.state
    
        var isRepeat = false
    
        if (customerId !== '') {
          isRepeat = this.props.customers.some((item) => {
            return item.id == customerId
          })
        }
    
    
        if (customerName !== '' && customerId !== '' && customerEmail !== '' && customerPhone !== '' &&
          customerGender !== '' && customerGender !== 'select gender') {
    
          if (!isRepeat) {
            const new_customer = {
              name: customerName,
              id: customerId,
              key: Math.random(),
              email: customerEmail,
              phone: customerPhone,
              gender: customerGender
            }
    
    
            this.props.addCustomer(new_customer);
    
            this.setState({
              customerName: '',
              customerId: '',
              customerEmail: '',
              customerPhone: '',
              customerGender: '',
    
            })
    
          } else {
            alert('Customer-ID already exists!')
          }
    
        } else {
          alert('Please fill all the details...')
        }
    
      }
    
      handlecustomerNameChange = event => {
        this.setState({
          customerName: event.target.value
        })
      }
    
      handlecustomerId = event => {
        this.setState({
          customerId: event.target.value
        })
      }
    
      handlecustomerEmailChange = event => {
        this.setState({
          customerEmail: event.target.value
        })
      }
    
      handlecustomerPhoneChange = event => {
        this.setState({
          customerPhone: event.target.value
        })
      }
    
      handleGenderChange = event => {
        this.setState({
          customerGender: event.target.value
        })
      }

    render(){
        return(
            <form id="to-do-form" onSubmit={this.addCustomer}>
            <h1 style={{marginLeft:'40px', color:'white'}} >User Information</h1>

            <input
              placeholder="Name"
              value={this.state.customerName}
              onChange={this.handlecustomerNameChange}
              type="text"
              ref="nameInput"

            />

            <input
              placeholder="Customer_id"
              value={this.state.customerId}
              onChange={this.handlecustomerId}
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
              ref='genderInput' >
              <option value="select gender">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>

            </select>

            <button type="submit" >Add Customer</button>
          </form>
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
      addCustomer: (cus) => dispatch(addCustomer(cus))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Form);