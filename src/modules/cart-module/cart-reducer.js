import omit from 'lodash/omit';
import {CART_CLEAR, CART_UPDATE_COUNT} from './constants';

/*
* <dishId>: {
*   <optionId1_optionId2>: { count: number },
*   <optionId6_optionId4>: { count: number },
* }
* */

const defaultStore = {
  1: {
    '00': { count: 1 },
  },
  6: {
    '00': { count: 1 },
  },
  10: {
    '00': { count: 1 },
    '01': { count: 2 },
    '01_02': { count: 1 },
  }
};

export const cartReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case CART_UPDATE_COUNT: {
      const { count, dishId, optionId } = action.payload;
      let nextOptions = {};

      if(count === 0) {
        nextOptions = omit(store[dishId], optionId);
      } else {
        nextOptions = {
          ...store[dishId],
          [optionId]: { count }
        }
      }

      return {
        ...store,
        [dishId]: nextOptions
      }
    }
    case CART_CLEAR:
      return {};
    default: {
      return store;
    }
  }
}