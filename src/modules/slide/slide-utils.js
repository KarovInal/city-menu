import {SLIDE_DIRECTION} from "./slide-constants";
import {ESlideDirection} from "./slide-enums";

const setSlideDirection = (direction) => {
  localStorage.setItem(SLIDE_DIRECTION, direction);
}

export const setUpSlideDirection = () => {
  setSlideDirection(ESlideDirection.Up);
};

export const setLeftSlideDirection = () => {
  setSlideDirection(ESlideDirection.Left);
};

export const setRightSlideDirection = () => {
  setSlideDirection(ESlideDirection.Right);
};

export const setDownSlideDirection = () => {
  setSlideDirection(ESlideDirection.Down);
};

export const resetSlideDirection = () => {
  localStorage.removeItem(SLIDE_DIRECTION);
};

export const getSlideDirection = () => localStorage.getItem(SLIDE_DIRECTION);
