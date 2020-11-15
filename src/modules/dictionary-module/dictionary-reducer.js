import { ECategories, keksFamilyData } from "../../db/keks-family";
import { EDishOptions } from "../../db/common-enums";

const defaultState = {
  dishOptions: EDishOptions,
  dishes: keksFamilyData.menuList,
  dishCategories: ECategories,
  contacts: keksFamilyData.dictionary.contacts,
  pickupOptions: keksFamilyData.dictionary.pickupOptions,
  deliveryOptions: keksFamilyData.dictionary.deliveryOptions,
};

export const dictionaryReducer = (store = defaultState) => {
  return store;
};
