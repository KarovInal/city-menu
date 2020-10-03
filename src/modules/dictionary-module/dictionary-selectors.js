import get from "lodash/get";

export const dishesSelector = state => get(state, 'dictionary.dishes', {});

export const dishOptionsSelector = state => get(state, 'dictionary.dishOptions', {});

export const dishCategoriesSelector = state => get(state, 'dictionary.dishCategories', {});

export const getDishByIdSelector = state => dishId => {
  const dishes = dishesSelector(state);

  return get(dishes, dishId, {});
}
