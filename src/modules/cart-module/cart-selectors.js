import get from 'lodash/get';

export const getCartSelector = state => get(state, 'cart', {});
