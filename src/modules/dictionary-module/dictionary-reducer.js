import { ECategories, keksFamilyData } from "../../db/keks-family";
import { EDishOptions } from "../../db/common-enums";

const defaultState = {
  dishOptions: EDishOptions,
  dishes: keksFamilyData.menuList,
  dishCategories: ECategories,
  pickupOptions: keksFamilyData.dictionary.pickupOptions,
  deliveryOptions: keksFamilyData.dictionary.deliveryOptions,
};

export const dictionaryReducer = (store = defaultState, actions) => {
  return store;
};
