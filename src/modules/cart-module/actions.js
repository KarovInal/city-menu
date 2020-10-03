import { CART_UPDATE_COUNT, CART_CLEAR } from './constants';

export const cartUpdateCountAction = (dishId = '', optionId = '', count = 0) => ({
  type: CART_UPDATE_COUNT,
  payload: {
    count,
    dishId,
    optionId,
  }
});

export const cartClearAction = () => ({
  type: CART_CLEAR,
})