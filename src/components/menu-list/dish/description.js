import React from 'react';
import Grid from "@material-ui/core/Grid";
import { gramToText } from "../../../utils";
import { Body2 } from "../../typography/body2";
import { Subtitle } from "../../typography/subtitle";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: ({ isDishFullOpened }) => ({
    height: isDishFullOpened ? 'auto' : '147px',
    overflow: 'hidden',
    width: isDishFullOpened ? '100%' : 'auto',
    paddingLeft: isDishFullOpened ? '0px' : '16px',
    marginTop: isDishFullOpened ? '8px' : '0',
  }),
  title: ({ isDishFullOpened }) => ({
    display: '-webkit-box',
    '-webkit-line-clamp': isDishFullOpened ? 'unset' : '3',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '16px',
    lineHeight: '27px',
  }),
  description: ({ isDishFullOpened }) => ({
    display: '-webkit-box',
    '-webkit-line-clamp': isDishFullOpened ? 'unset' : '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '14px',
    lineHeight: '24px',
    color: `${theme.mode.secondary.secondaryTextColor} !important`,
  })
}));

export const Description = React.memo(({
  isDishFullOpened,
  title,
  description,
  weight,
}) => {
  const classes = useStyles({ isDishFullOpened });

  return (
    <Grid container className={classes.root}>
      <Subtitle className={classes.title}>
        {title}
      </Subtitle>
      <Body2 className={classes.description}>
        {description}
      </Body2>
      <Body2 className={classes.description}>
        {gramToText(weight && weight.mass, weight && weight.type)}
      </Body2>
    </Grid>
  );
});
