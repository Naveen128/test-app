import { ADD_CUSTOMER, UPDATE_CUSTOMER} from './actionTypes';

export  const addCustomer = cus => {
    return {
        type: ADD_CUSTOMER,
        customer: cus
    }
}

export const updateCustomer = (cus, id) => {
    return {
        type: UPDATE_CUSTOMER,
        customer: cus,
        id:id,
    }
}