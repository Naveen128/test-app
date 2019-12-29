import { ADD_CUSTOMER, UPDATE_CUSTOMER } from '../actions/actionTypes'
import { ALPN_ENABLED } from 'constants';

const initialState = {
    customers: [{
        name:'Steve Smith',
        id:10,
        email:'Steve@gmail.com',
        phone:  1459258888,
        gender:'male'
    },
    {
        name:'John',
        id:12,
        email:'John@gmail.com',
        phone:  1459258888,
        gender:'male'
    }
]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: state.customers.concat(action.customer)
            };


        case UPDATE_CUSTOMER:

            var customers = state.customers
            var index = customers.findIndex(item => item.id == action.id)
            customers[index] = action.customer
            return {
                ...state,
                customers
            };
            
        default:
            return state;
    }

}

export default reducer;