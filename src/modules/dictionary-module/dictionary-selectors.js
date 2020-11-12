import get from "lodash/get";

export const dictionarySelector = state => get(state, 'dictionary', {});

export const dishesSelector = state => get(state, 'dictionary.dishes', {});

export const dishOptionsSelector = state => get(state, 'dictionary.dishOptions', {});

export const dishCategoriesSelector = state => get(state, 'dictionary.dishCategories', {});

export const getDeliveryMinPriceSelector = state => get(state, 'dictionary.deliveryOptions.minPrice', 0);

export const pickupAddressSelector = state => get(state, 'dictionary.pickupOptions.pickupAddress', []);

export const getDishByIdSelector = state => dishId => {
  const dishes = dishesSelector(state);

  return get(dishes, dishId, {});
}
