import { ADD_NEW_ORDER, CLEAR_ORDER } from "./constants";
import { getOrderFromLocalStorage, setOrderToLocalStorage } from "./actions";

const defaultState = getOrderFromLocalStorage();

export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_ORDER:
      setOrderToLocalStorage({
        orderId: action.payload.orderId,
        dishes: action.payload.dishes,
      });

      return {
        orderId: action.payload.orderId,
        dishes: action.payload.dishes,
      }
    case CLEAR_ORDER:
      setOrderToLocalStorage({
        orderId: null,
        dishes: null,
      });

      return {
        orderId: null,
        dishes: null,
      }
    default:
      return state;
  }
};
