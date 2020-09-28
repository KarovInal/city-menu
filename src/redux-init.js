import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
import { cartReducer } from './modules/cart-module';
import { dictionaryReducer } from "./modules/dictionary-module";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  cart: cartReducer,
  dictionary: dictionaryReducer
});

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
