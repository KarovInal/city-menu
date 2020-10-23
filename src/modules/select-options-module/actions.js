import { RADIO_OPTIONS_CHANGE, CHECKBOX_OPTIONS_CHANGE } from "./reducer";

export const radioOptionsChange = (payload) => ({
  type: RADIO_OPTIONS_CHANGE,
  payload,
});

export const checkboxOptionsChange = (payload) => ({
  type: CHECKBOX_OPTIONS_CHANGE,
  payload,
});
