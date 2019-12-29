import { createStore, combineReducers, compose , applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import customerReducer from './reducers/customerReducer'

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' && 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */

const middlewares = [ thunkMiddleware ];
const enhancers = [ applyMiddleware(...middlewares) ];

const rootReducer = combineReducers({
    customers:customerReducer
});

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(...enhancers) )
}

export default configureStore; 