import React from 'react';
import cn from "classnames";
import { FlexColumn } from "../../flex-column";
import { Subtitle } from "../../typography/subtitle";
import { Body2 } from "../../typography/body2";
import { MAX_DESCRIPTION_CHAR_LENGTH } from "../menu-list-constants";
import { gramToText } from "../../../utils";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  pl16: {
    paddingLeft: "16px",
  },
  description: {
    color: `${theme.mode.secondary.secondaryTextColor} !important`,
  },
}));

export const Description = React.memo(({
  isDishFullOpened,
  title,
  description,
  weight,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs>
      <div
        className={cn({
          [classes.pl16]: !isDishFullOpened,
        })}
      >
        <FlexColumn className={classes.text}>
          <Subtitle>{title}</Subtitle>
          <Body2 className={classes.description}>
            {description.length >=
            MAX_DESCRIPTION_CHAR_LENGTH
              ? description.slice(
              0,
              MAX_DESCRIPTION_CHAR_LENGTH
            ) + "..."
              : description}
          </Body2>
          <Body2 className={classes.description}>
            {gramToText(weight && weight.mass, weight && weight.type)}
          </Body2>
        </FlexColumn>
      </div>
    </Grid>
  );
});
