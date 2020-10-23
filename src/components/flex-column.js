import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import classnames from "classnames";

const useStyles = makeStyles({
  root: props => ({
    display: 'flex',
    flexDirection: 'column',
    ...props,
  }),
});

// TODO [NZ] 16.10.2020: Подумать над тем, чтобы заюзать `Flex` comp-t как основу для `FlexColumn`
//  Если сейчас заменять div на Flex то вроде все должно работать, но все равно это слишком рискованно. Я не где и как можно проверить результат.
export const FlexColumn = React.memo(({ children, className, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classnames(classes.root, className)}>{children}</div>
  );
});
