import React, {Fragment} from 'react';
import map from 'lodash/map';
import join from 'lodash/join';
import size from 'lodash/size';
import random from 'lodash/random';
import AppBar from "@material-ui/core/AppBar";
import { ArrowBack } from "@material-ui/icons";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import { Body1 } from "../../components/typography/body1";
import { Title } from "../../components/typography/title";
import Grid from "@material-ui/core/Grid";
import { GhostButton, PrimaryButton } from "../../components/buttons";
import { useSelector, useDispatch } from "react-redux";
import { getCartSelector } from "../../modules/cart-module";
import { Preview } from "../../components/position/preview";
import { Divider } from "@material-ui/core";
import { Subtitle } from "../../components/typography/subtitle";
import { Body2 } from "../../components/typography/body2";
import { Counter } from "../../components/counter";
import AddIcon from '@material-ui/icons/Add';
import { cartUpdateCountAction, cartClearAction } from "../../modules/cart-module/actions";
import { DiscountText } from "../../components/typography/discount-text";
import { DEFAULT_DISCOUNT } from "../../constants/discount";
import { Caption } from "../../components/typography/caption";
import { useHistory } from "react-router-dom";
import { addNewOrderAction } from "../../modules/order-module/actions";
import {getDishesAsArraySelector, getOrderDishDataSelector, getPriceSelector} from "../../selectors/dishes-selector";

const useStyles = makeStyles((theme) => ({
  header: {
    height: '60px',
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)"
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: 'center'
  },
  removeText: {
    lineHeight: '32px',
    color: theme.mode.primary.primaryColor
  },
  footerAppBar: {
    top: 'auto',
    bottom: 0,
  },
  footerToolBar: {
    height: '60px',
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
    borderTop: "solid #E6E6E6 1px"
  },
  discountPrice: {
    textDecoration: 'line-through',
    color: theme.mode.primary.disabledTextColor,
  },
  confirmOrderButton: {
    height: '48px'
  },
  dishWrap: {
    padding: '20px 16px'
  },
  discountWrap: {
    padding: '20px 24px'
  },
  addMoreWrap: {
    paddingTop: '20px'
  }
}));

export const CartPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const cartData = useSelector(getCartSelector);
  const cartDishes = useSelector(getDishesAsArraySelector)(true);
  const getDishDataFromCart = useSelector(getOrderDishDataSelector);
  const [finalPrice, finalPriceWithDiscount, difPrice] = useSelector(getPriceSelector)(true);

  const confirmOrder = () => {
    //0. create uniq id for order and save dishes
    dispatch(addNewOrderAction({
      orderId: random(1000000, 9999999),
      dishes: cartData,
    }));
    //2. clear cart
    dispatch(cartClearAction());
    //3. redirect to order page
    history.push('/order');
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense" className={classes.header}>
          <IconButton onClick={history.goBack} edge="start" color="inherit" aria-label="menu">
            <ArrowBack />
          </IconButton>
          <Title className={classes.headerTitle}>Корзина</Title>
          <Body1 onClick={() => dispatch(cartClearAction())} className={classes.removeText}>
            Удалить
          </Body1>
        </Toolbar>
      </AppBar>
      <Toolbar />

      {
        map(cartDishes, ({ dishId, optionId, count }, index) => {
          const { title = '', preview, priceWithOptions, optionsFromCart } = getDishDataFromCart(dishId, optionId, true);

          return (
            <Fragment key={index}>
              <Grid className={classes.dishWrap} container wrap='nowrap'>
                <Preview size='sm' preview={preview} />
                <Grid container direction='column' style={{ margin: '0 16px' }}>
                  <Subtitle>{ title }</Subtitle>
                  <Body2 type='secondary'>
                    {join(map(optionsFromCart, 'title'), ', ')}
                  </Body2>
                  <Counter
                    count={count}
                    style={{ marginTop: '16px' }}
                    onUpdate={nextCount => dispatch(cartUpdateCountAction(dishId, optionId, nextCount))}
                  />
                </Grid>
                <Body1>{`${priceWithOptions}\u00A0₽`}</Body1>
              </Grid>
              <Divider />
            </Fragment>
          );
        })
      }

      {
        size(cartDishes) > 0 && (
          <Grid container direction='column' className={classes.discountWrap}>
            <Grid container justify='space-between'>
              <DiscountText>Скидка {DEFAULT_DISCOUNT}%</DiscountText>
              <Body1>{`–${difPrice}\u00A0₽`}</Body1>
            </Grid>
            <Caption type='secondary'>Заказывая через сервис QR Menu вы получаете скидку</Caption>
          </Grid>
        )
      }

      <Divider />

      <Grid container justify='center' className={classes.addMoreWrap}>
          <GhostButton startIcon={<AddIcon />} onClick={() => history.push('/')}>
            Добавить еще
          </GhostButton>
      </Grid>

      <Toolbar />
      <Toolbar />
      <AppBar position="fixed" className={classes.footerAppBar}>
        <Toolbar variant="dense" className={classes.footerToolBar}>
          <Grid container direction='row' justify='space-between'>
            <Grid container direction='column' style={{ width: 'auto' }}>
              <Body1 className={classes.discountPrice}>{finalPrice} ₽</Body1>
              <Title>{finalPriceWithDiscount} ₽</Title>
            </Grid>
            <Grid container direction='column' justify='center' style={{ width: 'auto' }}>
              <PrimaryButton onClick={confirmOrder} className={classes.confirmOrderButton}>
                Подтвердить заказ
              </PrimaryButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}