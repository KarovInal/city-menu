import { ECategories, keksFamilyData } from "../../db/keks-family/keks-family-data";
import { EDishOptions } from "../../db/common-enums";

const defaultState = {
  dishOptions: EDishOptions,
  dishes: keksFamilyData.menuList,
  dishCategories: ECategories,
};

export const dictionaryReducer = (store = defaultState, actions) => {
  return store;
};
