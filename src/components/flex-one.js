import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    flex: "1",
  },
});

export const FlexOne = React.memo(({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>{children}</div>
  );
});
