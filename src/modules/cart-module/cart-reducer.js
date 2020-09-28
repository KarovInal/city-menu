import omit from 'lodash/omit';
import { CART_UPDATE_COUNT } from './constants';

/*
* <dishId>: {
*   <optionId1_optionId2>: { count: number },
*   <optionId6_optionId4>: { count: number },
* }
* */

const defaultStore = {
  10: {
    'O0': { count: 1 },
    'O1_O2': { count: 1 },
    'O2': { count: 2 },
  }
};

export const cartReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case CART_UPDATE_COUNT: {
      const { nextCount, dishId, optionId } = action.payload;
      const nextOptions = omit(store[dishId], [optionId]);

      return {
        ...store,
        [dishId]: {
          ...nextOptions,
          ...(
            nextCount === 0
              ? {}
              : { [optionId]: { count: nextCount }
            }
          ),
        }
      }
    }
    default: {
      return store;
    }
  }
}