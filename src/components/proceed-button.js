import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title } from "./typography/title";
import { Body2 } from "./typography/body2";
import { Flex } from "./flex";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

export const ProceedButton = React.memo(({ totalPrice }) => {
  const classes = useStyles();
  const history = useHistory();
  const goToCartPage = () => history.push('/cart');

  return (
    <Button disableElevation color='secondary' variant="contained" onClick={goToCartPage}>
      <Flex justifyContent="space-between">
        <Title className={classes.root}>{totalPrice}</Title>
        <Body2 className={classes.root}>ПЕРЕЙТИ В КОРЗИНУ</Body2>
      </Flex>
    </Button>
  );
});
