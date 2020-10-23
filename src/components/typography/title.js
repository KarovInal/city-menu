import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.mode.primary.primaryTextColor,
    /* Header */
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '32px',
  },
}));

export const Title = React.memo(({ children, className = '' }) => {
  const classes = useStyles();

  return <span className={`${classes.root} ${className}`}>{children}</span>;
});
