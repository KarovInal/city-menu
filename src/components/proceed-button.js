import React from "react";
import { useHistory } from "react-router-dom";
import { noop } from "lodash";
import cn from "classnames";
import { Title } from "./typography/title";
import { Body2 } from "./typography/body2";
import { Flex } from "./flex";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { getPriceSelector } from "../selectors/dishes-selector";
import { isQrMenu } from "../is-qr-menu";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  w90p: {
    width: "90%",
  },
  w100p: {
    width: "100%",
  },
  sticky: {
    position: "fixed",
    bottom: "10px",
    width: "calc(100% - 24px)",
    margin: "0px 12px",
    boxSizing: "border-box",
  },
  disabled: {
    opacity: "0",
    zIndex: "-1",
  },
});

export const ProceedButton = React.memo(({
  onSearch,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [_, totalPrice] = useSelector(getPriceSelector)(true);

  const [animateClass, setAnimateClass] = React.useState("");

  const setClass = React.useCallback(() => {
    setAnimateClass("animate__animated animate__headShake");

    setTimeout(() => setAnimateClass(""), 500);
  }, []);

  React.useEffect(() => {
    if (!totalPrice) {
      return;
    }

    setClass();
  }, [setClass, totalPrice]);

  const classes = useStyles();
  const history = useHistory();
  const goToCartPage = () => {
    onSearch('');
    history.push("/cart");
  }

  const content = isQrMenu
    ? (
      <>
        <Body2 className={classes.root}>Итого: </Body2>
        <Title className={classes.root}>{totalPrice} ₽</Title>
      </>
    )
    : (
      <>
        <Title className={classes.root}>{totalPrice} ₽</Title>
        <Body2 className={classes.root}>ПЕРЕЙТИ В КОРЗИНУ</Body2>
      </>
    )

  return (
    <Button
      disableElevation
      color="secondary"
      variant="contained"
      onClick={isQrMenu ? noop : goToCartPage}
      className={cn(classes.w90p, classes.sticky, animateClass, {
        [classes.disabled]: totalPrice <= 0,
      })}
    >
      <Flex
        className={classes.w100p}
        justifyContent="space-between"
        alignItems="center"
      >
        {content}
      </Flex>
    </Button>
  );
});
