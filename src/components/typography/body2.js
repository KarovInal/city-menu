import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: ({ medium, type = 'primary', rest }) => ({
    color: type === 'primary' ? theme.mode.primary.primaryTextColor : theme.mode.secondary.secondaryTextColor,
    /* Header */
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: medium ? '500' : 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    ...rest,
  }),
}));

export const Body2 = React.memo(({ children, className, ...rest }) => {
  const classes = useStyles({...rest});

  return <span className={classnames(classes.root, className)}>{children}</span>;
});
