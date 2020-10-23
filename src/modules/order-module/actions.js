import get from 'lodash/get';
import { ADD_NEW_ORDER, CLEAR_ORDER } from "./constants";

export const addNewOrderAction = ({ orderId, dishes }) => ({
  type: ADD_NEW_ORDER,
  payload: {
    orderId,
    dishes
  }
});

export const clearOrderAction = () => ({
  type: CLEAR_ORDER,
});

export const getOrderFromLocalStorage = () => {
  const order = localStorage.getItem('order');

  try {
    const parsedOrder = JSON.parse(order);

    return {
      orderId: get(parsedOrder, 'orderId', null),
      dishes: get(parsedOrder, 'dishes', null),
    };
  } catch (e) {
    return {
      orderId: null,
      dishes: null,
    }
  }
}

export const setOrderToLocalStorage = (nextOrder) => {
  nextOrder = {
    orderId: get(nextOrder, 'orderId', null),
    dishes: get(nextOrder, 'dishes', null),
  }

  try {
    const stringifyNextOrder = JSON.stringify(nextOrder);

    localStorage.setItem('order', stringifyNextOrder);
  } catch (e) {
    return null;
  }
}