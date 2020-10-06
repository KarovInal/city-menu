import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  wrapper: {
    padding: "0 16px",
  },
});

export const PaddingWrapper = React.memo(({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>{children}</div>
  );
});
