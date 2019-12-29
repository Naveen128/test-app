import React from 'react';
import App from './App'
import Customer from './components/Customer'
import EditCustomer from './components/EditCustomer'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';


import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();


function MainContainer() {
    const navStyle={
        color:'white'
    }
    return (
        <Provider store={store} >
        <Router>
            <div className="header">
                <h1>Customer Management</h1>
                <ul className="nav-links">
                <li>
                    <Link style={navStyle} to="/">Add Customer</Link>
                </li>

                <li>
                    <Link style={navStyle} to="/customer">Customers</Link>
                </li>
                </ul>
            </div>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/customer" component={Customer}/>
                <Route exact path="/customer/edit/:id" component={EditCustomer}/>
                {/* <Route exact path="/CustomerDetails/:id" component={CustomerDetails} />
                <Route exact path="/CustomerDetails/edit/:id" component={EditCustomer} /> */}
                
            </div>
        </Router>
        </Provider>
    )
}
export default MainContainer;