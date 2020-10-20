import omit from 'lodash/omit';
import {CART_CLEAR, CART_UPDATE_COUNT} from './constants';
import { EmptyOptionId } from "../../enums";

/*
* <dishId>: {
*   <optionId1_optionId2>: { count: number },
*   <optionId6_optionId4>: { count: number },
* }
* */

const defaultStore = {};

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
