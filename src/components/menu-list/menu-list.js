import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { gramToText } from "../../utils";
import { SecondaryButton } from "../buttons";
import { Price } from "../position/price";
import { FlexColumn } from "../flex-column";
import { FlexRow } from "../flex-row";
import { Preview } from "../position/preview";
import { Subtitle } from "../typography/subtitle";
import { Body2 } from "../typography/body2";
import Divider from "@material-ui/core/Divider";

export const useStyles = makeStyles((theme) => ({
  preview: {
    width: '140px',
  },
  text: {
    paddingLeft: '16px',
    width: '100%',
  },
  bottomBlock: {
    paddingTop: '16px',
  },
  position: {
    margin: '20px 0',
  },
  body2: {
    color: theme.mode.secondary.secondaryTextColor,
  },
}));

const ids = {}
const getCategoryId = (category) => {
  if (category in ids) {
    return null;
  }

  ids[category] = category;

  return category;
}

export const MenuList = React.memo(({ data }) => {
  const classes = useStyles();

  return (
    <div>
      {
        data.map(({title, preview, description, weight, price, category}) => {
          return (
            <div id={getCategoryId(category)}>
              <FlexColumn className={classes.position}>
                <FlexRow>
                  <div className={classes.preview}>
                    <Preview preview={preview}/>
                  </div>
                  <FlexColumn className={classes.text}>
                    <Subtitle>{title}</Subtitle>
                    <Body2 className={classes.body2}>{description}</Body2>
                    <Body2 className={classes.body2}>{gramToText(weight)}</Body2>
                  </FlexColumn>
                </FlexRow>
                <FlexRow justifyContent="space-between" className={classes.bottomBlock}>
                  <div>
                    <Price price={price} />
                  </div>
                  <div>
                    <SecondaryButton>В конзину</SecondaryButton>
                  </div>
                </FlexRow>
              </FlexColumn>
              <Divider />
            </div>
          )
        })
      }
    </div>
  );
});
