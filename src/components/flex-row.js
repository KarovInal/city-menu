import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import classnames from "classnames";

const useStyles = makeStyles({
  root: props => ({
    display: 'flex',
    flexDirection: 'row',
    ...props,
  }),
});

export const FlexRow = React.memo(({ children, className, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classnames(classes.root, className)}>{children}</div>
  );
});
