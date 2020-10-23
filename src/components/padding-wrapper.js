import React from 'react';
import cn from 'classnames';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  wrapper: {
    padding: "0 16px",
  },
});

export const PaddingWrapper = React.memo(({ children, className }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.wrapper, className)}>{children}</div>
  );
});
