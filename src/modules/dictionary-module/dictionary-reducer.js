import { ECategories, keksFamilyData } from "../../db/keks-family";
import { EDishOptions } from "../../db/common-enums";

const defaultState = {
  dishOptions: EDishOptions,
  dishCategories: ECategories,
  prices: keksFamilyData.prices,
  dishes: keksFamilyData.menuList,
  contacts: keksFamilyData.dictionary.contacts,
  pickupOptions: keksFamilyData.dictionary.pickupOptions,
  deliveryOptions: keksFamilyData.dictionary.deliveryOptions,
};

export const dictionaryReducer = (store = defaultState) => {
  return store;
};
