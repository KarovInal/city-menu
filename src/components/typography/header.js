import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.main.primaryTextColor,
    /* Header */
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "32px",
    lineHeight: "44px",
  },
}));

export const Header = React.memo(({ children }) => {
  const classes = useStyles();

  return <span className={classes.root}>{children}</span>;
});
