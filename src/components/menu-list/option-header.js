import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FlexOne } from "../flex-one";
import { Subtitle } from "../typography/subtitle";
import { Body1 } from "../typography/body1";
import { FlexRow } from "../flex-row";
import GreyVector from "./assets/Grey-Vector.png";

const useStyles = makeStyles({
  greyVector: {
    display: "block",
    flex: "0 14px",
    margin: "0 10px 0 3px",
    backgroundImage: `url(${GreyVector})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
});

export const OptionHeader = React.memo(({ title, totalPrice }) => {
  const classes = useStyles();

  return (
    <FlexRow>
      <div className={classes.greyVector}/>
      <FlexOne>
        <Subtitle>{title}</Subtitle>
      </FlexOne>
      <div>
        <Body1 medium>
          +
          {totalPrice}
          {' '}
          ₽
        </Body1>
      </div>
    </FlexRow>
  );
});
