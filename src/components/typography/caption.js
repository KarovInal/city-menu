import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: ({ bold }) => ({
    color: theme.mode.primary.primaryTextColor,
    /* Header */
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: bold ? '500' : 'normal',
    fontSize: bold ? '14px' : '12px',
    lineHeight: bold ? '18px' : '16px',
  }),
}));

export const Caption = React.memo(({ children, ...rest }) => {
  const classes = useStyles(rest);

  return <span className={classes.root}>{children}</span>;
});
