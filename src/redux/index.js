import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

//this will allow us to make async functions inside actions
//e.g. wait for response then dispatch to reducer
const middleware = [thunk];

const applied = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(rootReducer, initialState, applied);

export default store;