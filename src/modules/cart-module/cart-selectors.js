import reduce from 'lodash/reduce';
import get from 'lodash/get';
import round from 'lodash/round';
import split from 'lodash/split';
import { DEFAULT_DISCOUNT } from './constants';
import { dishesSelector, dishOptionsSelector, getDishByIdSelector } from "../dictionary-module/dictionary-selectors";

const parseOptionId = (optionId = '') => {
  return split(optionId, '_');
};

export const getCartSelector = state => get(state, 'cart', {});

export const getPriceSelector = state => {
  const cart = getCartSelector(state);
  const dishes = dishesSelector(state);
  const dishOptions = dishOptionsSelector(state);

  const finalPrice = reduce(cart, (finalPriceAcc, options, dishId) => {
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
export const getDishesSelector = state => {
  const cart = getCartSelector(state);

  return reduce(cart, (cartAcc, dish, dishId) => {
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

export const getDishDataFromCartSelector = state => (dishId, optionId) => {
  const cart = getCartSelector(state);
  const dish = getDishByIdSelector(state)(dishId);
  const options = getOptionDataByIdSelector(state)(optionId);

  const price = get(dish, 'price', 0);
  const count = get(cart, [dishId, optionId, 'count'], 0);

  const sumOfOptions = reduce(options, (accPrice, { price }) => {
    accPrice += price;

    return accPrice;
  }, 0);

  return {
    ...dish,
    sumOfOptions,
    optionsFromCart: options,
    priceWithOptions: (price + sumOfOptions) * count
};
}
