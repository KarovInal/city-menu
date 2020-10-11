import { get as getFp } from "lodash/fp";
import { SELECT_OPTIONS_STORE_KEY } from "./constants";

export const getSelectedOptions = getFp(SELECT_OPTIONS_STORE_KEY);

export const createGetSelectedOptionsByDishId = (dishId) => createSelector(
  getFp(SELECT_OPTIONS_STORE_KEY),
  getFp(dishId),
);
