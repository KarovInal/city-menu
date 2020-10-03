import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#da102e',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
  },
}));

export const DiscountText = React.memo(({ children }) => {
  const classes = useStyles();

  return <span className={classes.root}>{children}</span>;
});
