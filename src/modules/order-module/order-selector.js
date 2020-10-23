import get from "lodash/get";

export const getOrderSelector = state => get(state, 'order', {});

export const getOrderDishesSelector = state => get(getOrderSelector(state), 'dishes', {});
