import reduce from 'lodash/reduce';
import get from 'lodash/get';
import round from 'lodash/round';
import split from 'lodash/split';
import { DEFAULT_DISCOUNT } from '../constants/discount';
import { getCartSelector } from "../modules/cart-module";
import { getOrderDishesSelector } from "../modules/order-module/order-selector";
import { dishesSelector, dishOptionsSelector, getDishByIdSelector } from "../modules/dictionary-module";

const parseOptionId = (optionId = '') => {
  return split(optionId, '_');
};

// Return final price from cart or order
export const getPriceSelector = state => (fromCart = false) => {
  const order = fromCart ? getCartSelector(state) : getOrderDishesSelector(state);
  const dishes = dishesSelector(state);
  const dishOptions = dishOptionsSelector(state);

  const finalPrice = reduce(order, (finalPriceAcc, options, dishId) => {
    const dishPrice = get(dishes, [dishId, 'price'], 0);

    const dishWithOptionsPrice = reduce(options, (optionsAcc, option, optionId) => {
      const optionsList = parseOptionId(optionId);
      const optionCount = get(option, 'count', 1);

      const totalOptionPrice = reduce(optionsList, (accOption, option) => {
        const optionPrice = get(dishOptions, [option, 'price'], 0);

        accOption += optionPrice
        return accOption;
      }, 0);

      optionsAcc += (dishPrice + totalOptionPrice) * optionCount;
      return optionsAcc;
    }, 0);

    finalPriceAcc += dishWithOptionsPrice;
    return finalPriceAcc;
  }, 0);

  const priceWithDiscount = round(finalPrice - ((finalPrice * DEFAULT_DISCOUNT) / 100), 1);
  const difPrice = round(finalPrice - priceWithDiscount);

  return [finalPrice, priceWithDiscount, difPrice];
}

/*
* [
*   { dishId: 10, optionId: '01_02', count: 3 },
* ]
* */
export const getDishesAsArraySelector = state => (fromCart = false) => {
  const order = fromCart ? getCartSelector(state) : getOrderDishesSelector(state);

  return reduce(order, (cartAcc, dish, dishId) => {
    const dishByOptions = reduce(dish, (dishAcc, option, optionId) => {

      dishAcc = [...dishAcc, { dishId, optionId, count: option.count }]
      return dishAcc;
    }, []);

    cartAcc = [...cartAcc, ...dishByOptions];
    return cartAcc;
  }, []);
}

export const getOptionDataByIdSelector = state => optionId => {
  const options = parseOptionId(optionId);
  const dishOptions = dishOptionsSelector(state);

  return reduce(options, (accOptions, optionId) => {
    const option = get(dishOptions, optionId, null);

    option && (accOptions = [...accOptions, option]);
    return accOptions;
  }, []);
}

/*
* {
*   ...dish,
*   sumOfOptions,
*   optionsFromCart,
*   priceWithOptions,
* }
* */
export const getOrderDishDataSelector = state => (dishId, optionId, fromCart = false) => {
  const order = fromCart ? getCartSelector(state) : getOrderDishesSelector(state);
  const dish = getDishByIdSelector(state)(dishId);
  const options = getOptionDataByIdSelector(state)(optionId);

  const price = get(dish, 'price', 0);
  const count = get(order, [dishId, optionId, 'count'], 0);

  const sumOfOptions = reduce(options, (accPrice, { price }) => {
    accPrice += price;

    return accPrice;
  }, 0);

  return {
    ...dish,
    count,
    sumOfOptions,
    optionsFromCart: options,
    priceWithOptions: (price + sumOfOptions) * count
  };
}
