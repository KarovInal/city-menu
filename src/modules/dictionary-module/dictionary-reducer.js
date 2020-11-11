import { ECategories, keksFamilyData } from "../../db/keks-family";
import { EDishOptions } from "../../db/common-enums";

const defaultState = {
  dishOptions: EDishOptions,
  dishes: keksFamilyData.menuList,
  dishCategories: ECategories,
  pickupAddress: keksFamilyData.dictionary.pickupAddress,
};

export const dictionaryReducer = (store = defaultState, actions) => {
  return store;
};
