import random from "lodash/random";
import axios from "axios";
import React, { Fragment, useEffect, useState } from 'react';
import { Selector } from "../../components/selector";
import { Controller, useForm } from 'react-hook-form';
import { Title } from "../../components/typography/title";
import { Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Body1 } from "../../components/typography/body1";
import {PrimaryButton} from "../../components/buttons";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addNewOrderAction } from "../../modules/order-module/actions";
import { cartClearAction } from "../../modules/cart-module/actions";
import { getCartSelector } from "../../modules/cart-module";
import { useHistory } from "react-router-dom";
import { TextFieldWrap, TextFieldWithMaskWrap } from "../../components/text-field-wrap";
import { getDishesAsArraySelector, getOrderDishDataSelector, getPriceSelector } from "../../selectors/dishes-selector";
import { Counter } from "../../components/counter";
import { RadioGroupWrap } from "../../components/radio-group-wrap";
import { normalizeDeliveryMessage, normalizePickupMessage } from "./normalize-telegram-message";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBack } from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import { SelectFieldWrap } from "../../components/select-field-wrap";
import { pickupAddressSelector } from "../../modules/dictionary-module";
import keyBy from "lodash/keyBy";
import get from "lodash/get";

const useStyles = makeStyles((theme) => ({
  header: {
    height: '60px',
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)'
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: 'center'
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
  formWrap: {
    flexGrow: 1,
    overflow: 'hidden',
    margin: '10px 10px'
  },
  fieldWrap: {
    margin: '10px 0'
  },
  fieldGap: {
    width: '20px',
  }
}));

const isNotFilledTel = v => v && v.indexOf("_") === -1 ? undefined : "Phone number is required.";

export const OrderFormPage = () => {
  const [formType, setFormType] = useState('delivery');
  const [isLoading, setIsLoading] = useState(false);
  const pickupAddress = useSelector(pickupAddressSelector);
  const [showIssueMessage, setShowIssueMessage] = useState(false);
  const [finalPrice, finalPriceWithDiscount] = useSelector(getPriceSelector)(true);
  const classes = useStyles()
  const history = useHistory();
  const dispatch = useDispatch();
  const cartData = useSelector(getCartSelector);
  const cartDishes = useSelector(getDishesAsArraySelector)(true);
  const getDishDataFromCart = useSelector(getOrderDishDataSelector);
  const {
    register: mainRegister,
    errors: mainErrors,
    formState: mainFormState,
    control: mainControl,
    getValues: mainGetValues,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  });

  const {
    register: deliveryRegister,
    errors: deliveryErrors,
    formState: deliveryFormState,
    control: deliveryControl,
    getValues: deliveryGetValues,
  } = useForm({
    mode: 'all',
    shouldUnregister: false,
    reValidateMode: 'onChange'
  });

  const {
    errors: pickupErrors,
    formState: pickupFormState,
    control: pickupControl,
    getValues: pickupGetValues,
  } = useForm({
    mode: 'all',
    shouldUnregister: false,
    reValidateMode: 'onChange'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const confirmOrder = () => {
    let message = '';
    const orderId = random(1000, 9999);

    setIsLoading(true);

    if(formType === 'delivery') {
      message = normalizeDeliveryMessage({
        values: {
          ...mainGetValues(),
          ...deliveryGetValues(),
        },
        orderId,
        cartDishes,
        getDishDataFromCart,
        finalPriceWithDiscount
      });
    } else {
      const { placeForPickup = '' } = pickupGetValues();

      message = normalizePickupMessage({
        values: {
          ...mainGetValues(),
          address: get(keyBy(pickupAddress, 'value'), [placeForPickup, 'title'])
        },
        orderId,
        cartDishes,
        getDishDataFromCart,
        finalPriceWithDiscount
      });
    }

    axios.post('https://2g8wfzqvg8.execute-api.us-east-2.amazonaws.com/prod/order',{
      chatId: 123,
      message,
    }).then(({status}) => {
      setIsLoading(false);

      if(status === 200) {
        //1. create uniq id for order and save dishes
        dispatch(addNewOrderAction({
          orderId,
          dishes: cartData,
        }));

        //2. clear cart
        dispatch(cartClearAction());

        history.push('/order');
      }
    }).catch(() => {
      setIsLoading(false);
    });
  }

  const isDisableForm = () => {
    if(isLoading || !mainFormState.isValid) return true;

    if(formType === 'delivery') {
      return !deliveryFormState.isValid;
    } else {
      return !pickupFormState.isValid;
    }
  }

  const renderPickupForm = () => (
    <Fragment>
      <Grid className={classes.fieldWrap}>
        <SelectFieldWrap
          defaultValue={''}
          variant='outlined'
          name='placeForPickup'
          errors={pickupErrors}
          label='Выберите адрес:'
          values={pickupAddress}
          control={pickupControl}
          rules={{ required: true }}
          touched={pickupFormState.touched}
        />
      </Grid>
    </Fragment>
  );

  const renderDeliveryForm = () => (
    <Fragment>
      <Grid className={classes.fieldWrap}>
        <TextFieldWrap
          fullWidth
          label='Адрес доставки *'
          errors={deliveryErrors}
          name='address'
          variant='outlined'
          touched={deliveryFormState.touched}
          inputRef={deliveryRegister({ required: true })}
        />
      </Grid>
      <Grid className={classes.fieldWrap} container direction='row' wrap='nowrap'>
        <TextFieldWrap
          fullWidth
          label='Кв./Офис *'
          type='number'
          errors={deliveryErrors}
          name='apt'
          variant='outlined'
          touched={deliveryFormState.touched}
          inputRef={deliveryRegister({ required: true })}
        />
        <div className={classes.fieldGap} />
        <TextFieldWrap fullWidth variant='outlined' inputRef={deliveryRegister} label='Подъезд' placeholder='Подъезд' name='entrance' />
      </Grid>
      <Grid className={classes.fieldWrap} container direction='row' wrap='nowrap'>
        <TextFieldWrap fullWidth variant='outlined' inputRef={deliveryRegister} label='Этаж' placeholder='Этаж' name='floor' />
        <div className={classes.fieldGap} />
        <TextFieldWrap fullWidth variant='outlined' inputRef={deliveryRegister} label='Домофон' placeholder='Домофон' name='intercom' />
      </Grid>
      <Grid className={classes.fieldWrap}>
        <RadioGroupWrap
          title='Способ оплаты *'
          name='typeOfPayment'
          errors={deliveryErrors}
          control={deliveryControl}
          defaultValue='cash'
          rules={{ required: true }}
          touched={deliveryFormState.touched}
          options={[
            { label: 'Наличными', value: 'cash' },
            { label: 'Банковской картой при получении', value: 'cardAfterDelivery' }
          ]}
        />
      </Grid>
      {
        (deliveryGetValues('typeOfPayment') === 'cash') && (
          <Grid className={classes.fieldWrap}>
            <TextFieldWrap
              fullWidth
              type='number'
              label='Сдача с:'
              variant='outlined'
              name='changeFromCash'
              errors={deliveryErrors}
              touched={deliveryFormState.touched}
              inputRef={deliveryRegister({ required: false })}
            />
          </Grid>
        )
      }
    </Fragment>
  );

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar variant='dense' className={classes.header}>
          <IconButton onClick={() => history.push('/cart')} edge='start' color='inherit' aria-label='menu'>
            <ArrowBack />
          </IconButton>
          <Title className={classes.headerTitle}>Оформить заказ</Title>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Snackbar
        open={showIssueMessage}
        autoHideDuration={2000}
        onClose={() => setShowIssueMessage(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={`Упс... Что-то пошло не так. Попробуйте еще раз`}
      />

      <Grid container alignItems='center' direction='row'>
        <form className={classes.formWrap}>
          <Selector
            activeItem={formType}
            onChange={setFormType}
            items={[{title: 'Доставка', key: 'delivery'}, {title: 'Самовывоз', key: 'pickup'}]}
          />

          <Grid className={classes.fieldWrap}>
            <TextFieldWrap
              fullWidth
              label='Имя *'
              name='firstName'
              variant='outlined'
              errors={mainErrors}
              touched={mainFormState.touched}
              inputRef={mainRegister({ required: true })}
            />
          </Grid>
          <Grid className={classes.fieldWrap}>
            <TextFieldWithMaskWrap
              fullWidth
              type='tel'
              name='phone'
              alwaysShowMask
              variant='outlined'
              errors={mainErrors}
              control={mainControl}
              mask="+7 (999) 999-99-99"
              touched={mainFormState.touched}
              rules={{
                required: true,
                validate: {
                  inputTelRequired: isNotFilledTel
                }
              }}
            />
          </Grid>
          {
            formType === 'delivery'
              ? renderDeliveryForm()
              : renderPickupForm()
          }
          <Grid className={classes.fieldWrap}>
            <TextFieldWrap fullWidth variant='outlined' inputRef={mainRegister} label='Комментарий' placeholder='Комментарий' name='comment' />
          </Grid>
          <Grid className={classes.fieldWrap}>
            <Body1>Кол-во персон:</Body1>
            <Controller
              name='countOfPersons'
              control={mainControl}
              defaultValue={1}
              render={({ value, name, onChange, ...otherProps}) => {
                return (
                  <Counter count={value} onUpdate={onChange} />
                );
              }}
            />
          </Grid>
        </form>
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
              <PrimaryButton
                onClick={confirmOrder}
                disabled={isDisableForm()}
                className={classes.confirmOrderButton}
                startIcon={isLoading && <CircularProgress size={20} />}
              >
                Сделать заказ
              </PrimaryButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
