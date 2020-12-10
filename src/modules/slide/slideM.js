import React, {useEffect} from 'react';
import Slide from "@material-ui/core/Slide";
import {isString} from "lodash";
import {getSlideDirection, resetSlideDirection} from "./slide-utils";


export const SlideM = (props) => {
  const slideDirection = getSlideDirection();

  const hasSlideDirection = isString(slideDirection);

  const timeout = hasSlideDirection ? 300 : 0;

  const [checked, setChecked] = React.useState(!hasSlideDirection);

  useEffect(() => {
    setChecked(true);

    setTimeout(() => {
      resetSlideDirection();
    }, 100);
  }, []);

  return (
    <Slide direction={slideDirection} in={checked} timeout={timeout}>
      {props.children}
    </Slide>
  )
};
