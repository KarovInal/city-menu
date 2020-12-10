import React, {Fragment, useEffect} from 'react';
import map from 'lodash/map';
import join from 'lodash/join';
import size from 'lodash/size';
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
import { Preview } from "../../components/position/preview";
import { Divider } from "@material-ui/core";
import { Subtitle } from "../../components/typography/subtitle";
import { Body2 } from "../../components/typography/body2";
import { Counter } from "../../components/counter";
import AddIcon from '@material-ui/icons/Add';
import { cartUpdateCountAction, cartClearAction } from "../../modules/cart-module/actions";
import { DiscountText } from "../../components/typography/discount-text";
import { Caption } from "../../components/typography/caption";
import { useHistory, useParams } from "react-router-dom";
import {getDishesAsArraySelector, getOrderDishDataSelector, getPriceSelector} from "../../selectors/dishes-selector";
import {Analytics} from "aws-amplify";
import {isQrMenu} from "../../utils/is-qr-menu";
import {MinPriceDelivery} from "../../modules/min-price-delivery";
import {ableToDeliverySelector} from "../../modules/min-price-delivery/min-price-delivery-selector";
import {getDiscountSelector} from "../../modules/dictionary-module";
import {SlideM} from "../../modules/slide/slideM";
import {setLeftSlideDirection, setRightSlideDirection} from "../../modules/slide";

const useStyles = makeStyles((theme) => ({
  cartPageWrap: {
    flex: '1 1 auto',
    backgroundColor: 'white !important',
  },
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
  sumPrice: {
    color: theme.mode.primary.disabledTextColor,
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
  const discount = useSelector(getDiscountSelector);
  const ableToDelivery = useSelector(ableToDeliverySelector);
  const cartDishes = useSelector(getDishesAsArraySelector)(true);
  const getDishDataFromCart = useSelector(getOrderDishDataSelector);
  const [finalPrice, finalPriceWithDiscount, difPrice] = useSelector(getPriceSelector)(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const confirmOrder = () => {
    Analytics.record({
      name: 'click',
      attributes: {
        'click-type': "go_to_order",
        'click-page-name': 'CART',
      },
    });

    setLeftSlideDirection();

    history.push('order-form');
  }

  const params = useParams();

  const { cafe } = params;

  const goHome = () => {
    setRightSlideDirection();

    history.push(`/${cafe}`);
  }

  const renderPrice = () => {
    if(isQrMenu) {
      return (
        <Grid container direction='column' justify='center' alignItems='flex-end' style={{ width: '100%' }}>
          {
            !!discount && (
              <Body1 className={classes.discountPrice}>{finalPrice} ₽</Body1>
            )
          }
          <Title>Итого: {finalPriceWithDiscount} ₽</Title>
        </Grid>
      )
    }

    return (
      <Grid container direction='row' justify='space-between'>
        <Grid container direction='column' justify='space-between' style={{ width: 'auto' }}>
          {
            !!discount
              ? <Body1 className={classes.discountPrice}>{finalPrice} ₽</Body1>
              : <Body1 className={classes.sumPrice}>Итого:</Body1>
          }
          <Title>{finalPriceWithDiscount} ₽</Title>
        </Grid>
        <Grid container direction='column' justify='center' style={{ width: 'auto' }}>
          <PrimaryButton disabled={!ableToDelivery} onClick={confirmOrder} className={classes.confirmOrderButton}>
            Оформить заказ
          </PrimaryButton>
        </Grid>
      </Grid>
    );
  }

  return (
    <div className={classes.cartPageWrap}>
      <AppBar position="fixed">
        <Toolbar variant="dense" className={classes.header}>
          <IconButton onClick={goHome} edge="start" color="inherit" aria-label="menu">
            <ArrowBack />
          </IconButton>
          <Title className={classes.headerTitle}>Корзина</Title>
          <Body1 onClick={() => dispatch(cartClearAction())} className={classes.removeText}>
            Удалить
          </Body1>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <SlideM>
        <div>
          <MinPriceDelivery />
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
            !!discount && size(cartDishes) > 0 && (
              <Fragment>
                <Grid container direction='column' className={classes.discountWrap}>
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
          <Grid container justify='center' className={classes.addMoreWrap}>
            <GhostButton startIcon={<AddIcon />} onClick={goHome}>
              Добавить еще
            </GhostButton>
          </Grid>
        </div>
      </SlideM>
      <Toolbar />
      <Toolbar />
      <AppBar position="fixed" className={classes.footerAppBar}>
        <Toolbar variant="dense" className={classes.footerToolBar}>
          { renderPrice() }
        </Toolbar>
      </AppBar>
    </div>
  );
}
