import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = type => makeStyles((theme) => ({
  root: ({ bold }) => ({
    color: type === 'primary' ? theme.mode.primary.primaryTextColor : theme.mode.secondary.secondaryTextColor,
    /* Header */
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: bold ? '500' : 'normal',
    fontSize: bold ? '14px' : '12px',
    lineHeight: bold ? '18px' : '16px',
  }),
}));

export const Caption = React.memo(({ children, type = 'primary', ...rest }) => {
  const classes = useStyles(type)(rest);

  return <span className={classes.root} {...rest}>{children}</span>;
});
