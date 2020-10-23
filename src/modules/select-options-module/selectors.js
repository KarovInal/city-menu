import { createSelector } from "reselect";
import _ from 'lodash/fp';
import { SELECT_OPTIONS_STORE_KEY } from "./constants";

export const getSelectedOptions = _.get(SELECT_OPTIONS_STORE_KEY);

export const createGetSelectedOptionsByDishId = (dishId) => createSelector(
  getSelectedOptions,
  _.get(dishId),
);

export const createSelectedOptionsByDishIdGetter = createSelector(
  getSelectedOptions,
  // a.k.a (selectedOptions) => (dishId) => getFp(dishId)(selectedOptions),
  _.curryN(2, _.flip(_.get)),
);
