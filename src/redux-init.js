import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
import { SELECT_OPTIONS_STORE_KEY, selectOptionsReducer } from './modules/select-options-module';
import { CART_STORE_KEY, cartReducer } from './modules/cart-module';
import { dictionaryReducer } from "./modules/dictionary-module";
import { orderReducer } from "./modules/order-module/order-reducer";
import { recommendationsReducer } from "./modules/recommendations-module/recommendations-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  [SELECT_OPTIONS_STORE_KEY]: selectOptionsReducer,
  [CART_STORE_KEY]: cartReducer,
  order: orderReducer,
  dictionary: dictionaryReducer,
  recommendations: recommendationsReducer,
});

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
