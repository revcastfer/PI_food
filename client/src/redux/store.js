import {createStore,applyMiddleware,compose } from'redux';
import foodReducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  const Store = createStore(foodReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));
  export default Store