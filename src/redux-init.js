import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
import { SELECT_OPTIONS_STORE_KEY, selectOptionsReducer } from './modules/select-options-module';
import { cartReducer } from './modules/cart-module';
import { dictionaryReducer } from "./modules/dictionary-module";
import {orderReducer} from "./modules/order-module/order-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  [SELECT_OPTIONS_STORE_KEY]: selectOptionsReducer,
  cart: cartReducer,
  order: orderReducer,
  dictionary: dictionaryReducer
});

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
