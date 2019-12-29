import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Customers extends React.Component {
    render() {

        return (
            <div>
                <h1 style={{ marginLeft: '40px', color: 'white ' }} >Customers List</h1>
                {
                    this.props.customers.map(customer => (
                        <div key={customer.id} className="customer-list" >
                            <div>
                                <h2>Name: {customer.name}</h2>
                                <h2>Email: {customer.email}</h2>
                                <h2>Phone No: {customer.phone}</h2>
                                <h2>Gender: {customer.gender}</h2>
                            </div>

                            <h2 key={customer.key} >
                                <Link to={`/customer/edit/${customer.id}`}>
                                    Edit Details
                                </Link></h2>
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        StoreCustomers: state.customers.demo,
        customers: state.customers.customers
    }
}

export default connect(mapStateToProps, null)(Customers)