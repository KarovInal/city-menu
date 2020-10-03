import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: ({ medium }) => ({
    color: theme.mode.primary.primaryTextColor,
    /* Header */
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: medium ? '500' : 'normal',
    fontSize: '16px',
    lineHeight: '24px',
  }),
}));

export const Body1 = React.memo(({ children, className = '', ...rest }) => {
  const classes = useStyles(rest);

  return <span className={`${classes.root} ${className}`} {...rest}>{children}</span>;
});
