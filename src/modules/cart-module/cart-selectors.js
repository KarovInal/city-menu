import _ from 'lodash/fp';
import get from 'lodash/get';
import { createSelector } from "reselect";

export const getCartSelector = state => get(state, 'cart', {});

export const cartCountByOptionsGetter = createSelector(
  getCartSelector,
  _.curry((cart, path) => _.compose(
    _.add(1),
    _.getOr(0, [...path, 'count'])
  )(cart))
);
