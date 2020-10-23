const INIT_STORE = {};

export const RADIO_OPTIONS_CHANGE = 'RADIO_OPTIONS_CHANGE';
export const CHECKBOX_OPTIONS_CHANGE = 'CHECKBOX_OPTIONS_CHANGE';

export const selectOptionsReducer = (store = INIT_STORE, action) => {
  switch (action.type) {
    case RADIO_OPTIONS_CHANGE: {
      const { dishId, optionId, value } = action.payload;

      return {
        ...store,
        [dishId]: {
          ...store[dishId],
          [optionId]: value
        },
      };
    }
    case CHECKBOX_OPTIONS_CHANGE: {
      const { dishId, optionId, value } = action.payload;

      return {
        ...store,
        [dishId]: {
          ...store[dishId],
          [optionId]: {
            ...store[dishId][optionId],
            ...value,
          }
        },
      };
    }
    default: {
      return store;
    }
  }
}
