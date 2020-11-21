import React, {Fragment, useEffect} from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import join from "lodash/join";
import { useSelector } from "react-redux";
import { Close } from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import { useHistory, useParams } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { Divider, Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { Body1 } from "../../components/typography/body1";
import { Body2 } from "../../components/typography/body2";
import { Title } from "../../components/typography/title";
import { Caption } from "../../components/typography/caption";
import { Subtitle } from "../../components/typography/subtitle";
import {getDiscountSelector} from "../../modules/dictionary-module";
import { DiscountText } from "../../components/typography/discount-text";
import { getOrderSelector } from "../../modules/order-module/order-selector";
import { getDishesAsArraySelector, getOrderDishDataSelector, getPriceSelector } from "../../selectors/dishes-selector";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.mode.secondary.secondaryBackgroundColor,
  },
  header: {
    height: '60px',
    backgroundColor: theme.mode.secondary.secondaryBackgroundColor,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)"
  },
  headerTitle: {
    flexGrow: 1,
    color: '#fff',
    textAlign: 'center'
  },
  guideText: {
    marginTop: '20px',
    color: '#fff',
    textAlign: 'center'
  },
  orderListWrap: {
    marginTop: '24px',
    padding: '0 16px',
    backgroundColor: theme.mode.secondary.secondaryBackgroundColor,
  },
  orderListContainer: {
    width: '100%',
    padding: '24px',
    maxWidth: '382px',
    borderRadius: '12px',
    backgroundColor: '#fff',
  },
  dishWrap: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  discountPrice: {
    textDecoration: 'line-through',
    color: theme.mode.primary.disabledTextColor,
  },
  minH60: {
    minHeight: '60px',
    color: theme.mode.primary.disabledTextColor,
  },
}));

export const OrderPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const orderData = useSelector(getOrderSelector);
  const orderId = get(orderData, 'orderId', null);
  const discount = useSelector(getDiscountSelector);
  const orderDishes = useSelector(getDishesAsArraySelector)(false);
  const getDishDataFromOrder = useSelector(getOrderDishDataSelector);
  const [finalPrice, priceWithDiscount, difPrice] = useSelector(getPriceSelector)(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const params = useParams();

  const { cafe } = params;

  // TODO [NZ] 11.10.2020: Подумать над тем, чтобы делать всю страницу темной
  //  Необходимо создать обертку нас всеми урлами
  //  И добавить возможность управлять bgColor из redux
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense" className={classes.header}>
          <IconButton onClick={() => history.push(`/${cafe}`)} edge="start" aria-label="menu">
            <Close style={{ color: '#fff' }} />
          </IconButton>
          <Title className={classes.headerTitle}>Спасибо за заказ</Title>
          <IconButton edge="end">
            <div style={{ width: '1em' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.minH60} />
      <Grid container justify='center'>
        <Body1 className={classes.guideText}>
          Ваш заказ успешно отправлен <span role="img" aria-label="">👌</span>
          <br/>
          В ближайшее время с вами свяжется оператор для подтверждения заказа <span role="img" aria-label="">☎️</span>
        </Body1>
      </Grid>
      <Grid container justify='center' className={classes.orderListWrap}>
        <Grid className={classes.orderListContainer} container direction='column'>
          <Title>Заказ #{orderId}</Title>
          {
            map(orderDishes, ({ dishId, optionId }, index) => {
              const { title = '', priceWithOptions, optionsFromCart, count } = getDishDataFromOrder(dishId, optionId, false);

              return (
                <Fragment key={index}>
                  <Grid className={classes.dishWrap} container wrap='nowrap'>
                    <Grid container direction='column'>
                      <Subtitle>{ title }</Subtitle>
                      <Body2 type='secondary'>
                        {join(map(optionsFromCart, 'title'), ', ')}
                      </Body2>
                    </Grid>
                    <Body1>{`${count}\u00A0x\u00A0${priceWithOptions}\u00A0₽`}</Body1>
                  </Grid>
                  <Divider />
                </Fragment>
              );
            })
          }

          {
            !!discount && (
              <Fragment>
                <Grid container direction='column' className={classes.dishWrap}>
                  <Grid container justify='space-between'>
                    <DiscountText>Скидка {discount}%</DiscountText>
                    <Body1>{`–${difPrice}\u00A0₽`}</Body1>
                  </Grid>
                  <Caption type='secondary'>Заказывая через сервис QR Menu вы получаете скидку</Caption>
                </Grid>
                <Divider />
              </Fragment>
            )
          }

          <Grid container className={classes.dishWrap} direction='column' alignItems='flex-end'>
            {
              !!discount && <Body1 className={classes.discountPrice}>{finalPrice} ₽</Body1>
            }
            <Title>Итого: {priceWithDiscount} ₽</Title>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};
