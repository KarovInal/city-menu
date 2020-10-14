import React from 'react';
import { Price } from "../../position/price";
import { SecondaryButton } from "../../buttons";
import { FlexRow } from "../../flex-row";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  bottomBlock: {
    paddingTop: "16px",
  },
});

export const PriceBlock = React.memo(({
  price,
}) => {
  const classes = useStyles();

  return (
    <FlexRow
      justifyContent="space-between"
      className={classes.bottomBlock}
    >
      <div>
        <Price price={price}/>
      </div>
      <div>
        <SecondaryButton>В конзину</SecondaryButton>
      </div>
    </FlexRow>
  );
});
