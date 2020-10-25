import { createSelector } from "reselect";
import { get } from 'lodash';
import _ from 'lodash/fp';
import { SELECT_OPTIONS_STORE_KEY } from "./constants";
import { dishOptionsSelector} from "../dictionary-module";

export const getSelectedOptions = _.get(SELECT_OPTIONS_STORE_KEY);

export const createGetSelectedOptionsByDishId = (dishId) => createSelector(
  getSelectedOptions,
  _.get(dishId),
);

export const createGetSelectedOptionsPriceByDishId = (dishId) => createSelector(
  createGetSelectedOptionsByDishId(dishId),
  dishOptionsSelector,
  (selectedOptions, options) => _.cond([
    [_.isUndefined, _.constant(0)],
    [_.stubTrue, _.compose(
      _.sum,
      _.map(
        _.compose(
          (id) => get(options, [id, 'price']),
          Number,
        )
      ),
      _.flatten,
      _.values,
      _.mapValues(
        _.cond([
          [_.isString, _.identity],
          [_.isObject, _.compose(_.keys, _.pickBy(Boolean))],
          [_.stubTrue, _.identity],
        ])
      ),
    )],
  ])(selectedOptions)
);

export const createSelectedOptionsByDishIdGetter = createSelector(
  getSelectedOptions,
  // a.k.a (selectedOptions) => (dishId) => getFp(dishId)(selectedOptions),
  _.curryN(2, _.flip(_.get)),
);
