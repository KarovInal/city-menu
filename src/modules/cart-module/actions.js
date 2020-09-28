import { CART_UPDATE_COUNT } from './constants';

export const cartUpdateCountAction = (dishId = '', optionId = '', count = 0) => ({
  type: CART_UPDATE_COUNT,
  payload: {
    count,
    dishId,
    optionId,
  }
});