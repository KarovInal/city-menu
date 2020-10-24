import React from 'react';
import _ from 'lodash/fp';
import { Price } from "../../position/price";
import { SecondaryButton } from "../../buttons";
import { FlexRow } from "../../flex-row";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ReactComponent as PriceBlockMark } from "./assets/price-block-mark.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  bottomBlock: {
    paddingTop: "16px",
  },
  addInCartButton: {
    width: "115px",
    height: "36px",
  },
  colorWhite: {
    color: "white",
  },
});

const EContentType = {
  Text: 'text',
  Loading: 'Loading',
  Icon: 'icon',
}

export const PriceBlock = React.memo(({
  price, onClick, showLoader
}) => {
  const [text, setText] = React.useState(EContentType.Text);

  const onClickHandler = React.useCallback(() => {
    if (showLoader) {
      setText(EContentType.Loading);

      setTimeout(() => {
        setText(EContentType.Icon);

        setTimeout(() => setText(EContentType.Text), 650)
      }, 550)
    }

    onClick();
  }, [onClick]);

  const classes = useStyles();

  let content;

  switch (text) {
    case EContentType.Text: {
      content = 'В корзину';
      break;
    }
    case EContentType.Loading: {
      content = <CircularProgress color="primary" classes={{ colorPrimary: classes.colorWhite }} size={20} disableShrink />
      break;
    }
    case EContentType.Icon: {
      content = <PriceBlockMark />;
      break;
    }
    default: {
      content = 'В корзину';
    }
  }


  return (
    <FlexRow
      justifyContent="space-between"
      className={classes.bottomBlock}
    >
      <div>
        <Price price={price}/>
      </div>
      <div>
        <SecondaryButton
          onClick={text !== EContentType.Text ? _.noop : onClickHandler}
          className={classes.addInCartButton}
        >
          {content}
        </SecondaryButton>
      </div>
    </FlexRow>
  );
});
