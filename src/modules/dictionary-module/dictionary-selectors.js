import get from "lodash/get";

export const dictionarySelector = state => get(state, 'dictionary', {});

export const dishesSelector = state => get(state, 'dictionary.dishes', {});

export const getPricesSelector = state => get(state, 'dictionary.prices', {});

export const getContactsSelector = state => get(state, 'dictionary.contacts', {});

export const dishOptionsSelector = state => get(state, 'dictionary.dishOptions', {});

export const dishCategoriesSelector = state => get(state, 'dictionary.dishCategories', {});

export const getDeliveryOptionSelector = state => get(state, 'dictionary.deliveryOptions', {});

export const getDeliveryMinPriceSelector = state => {
  const deliveryOption = getDeliveryOptionSelector(state);

  return get(deliveryOption, 'minPrice', 0);
}

export const getDeliveryPolicyPriceSelector = state => {
  const deliveryOption = getDeliveryOptionSelector(state);

  return get(deliveryOption, 'deliveryPolicy', '');
}

export const pickupAddressSelector = state => get(state, 'dictionary.pickupOptions.pickupAddress', []);

export const getDishByIdSelector = state => dishId => {
  const dishes = dishesSelector(state);

  return get(dishes, dishId, {});
}

export const getDiscountSelector = state => {
  const prices = getPricesSelector(state);

  return get(prices, 'discount', 0);
};

export const getServicePercentSelector = state => {
  const prices = getPricesSelector(state);

  return get(prices, 'servicePercent', 0);
};

