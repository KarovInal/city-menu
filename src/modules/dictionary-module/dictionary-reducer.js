import { ECategories, EDishOptions } from "../../enums";
import { mockData } from "../../mock-data";

const defaultState = {
  dishOptions: EDishOptions,
  dishes: mockData.menuList,
  dishCategories: ECategories,
};

export const dictionaryReducer = (store = defaultState, actions) => {
  return store;
};
