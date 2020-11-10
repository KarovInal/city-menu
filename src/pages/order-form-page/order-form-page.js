import random from "lodash/random";
import axios from "axios";
import React, {useEffect, useState} from 'react';
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
import {getDishesAsArraySelector, getOrderDishDataSelector, getPriceSelector} from "../../selectors/dishes-selector";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addNewOrderAction } from "../../modules/order-module/actions";
import { cartClearAction } from "../../modules/cart-module/actions";
import { getCartSelector } from "../../modules/cart-module";
import { useHistory } from "react-router-dom";
import { TextFieldWrap, TextFieldWithMaskWrap } from "../../components/text-field-wrap";
import {Counter} from "../../components/counter";
import {RadioGroupWrap} from "../../components/radio-group-wrap";
import {normalizeDeliveryMessage} from "./normalize-telegram-message";
import IconButton from "@material-ui/core/IconButton";
import {ArrowBack} from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
    margin: '10px 10px'
  },
  fieldWrap: {
    margin: '10px 0'
  },
  fieldGap: {
    width: '20px',
  },
  m0: {
    margin: "0px",
  },
}));

const isNotFilledTel = v => v && v.indexOf("_") === -1 ? undefined : "Phone number is required.";

export const OrderFormPage = () => {
  const [formType, setFormType] = useState('delivery');
  const [isLoading, setIsLoading] = useState(false);
  const [showIssueMessage, setShowIssueMessage] = useState(false);
  const [finalPrice, finalPriceWithDiscount] = useSelector(getPriceSelector)(true);
  const classes = useStyles()
  const history = useHistory();
  const dispatch = useDispatch();
  const cartData = useSelector(getCartSelector);
  const cartDishes = useSelector(getDishesAsArraySelector)(true);
  const getDishDataFromCart = useSelector(getOrderDishDataSelector);
  const { register, errors, formState, control, getValues } = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const confirmOrder = () => {
    const orderId = random(1000, 9999);

    setIsLoading(true)

    axios.post('https://2g8wfzqvg8.execute-api.us-east-2.amazonaws.com/prod/order',{
      chatId: 123,
      message: normalizeDeliveryMessage({
        values: getValues(),
        orderId,
        cartDishes,
        getDishDataFromCart,
        finalPriceWithDiscount
      }),
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

  const [state, setState] = React.useState({
    offer1: false,
    offer2: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [offer1, setOpenOffer1] = React.useState(false);
  const [offer2, setOpenOffer2] = React.useState(false);

  const createHandleClickOpen = (setOpenOffer) => () => {
    setOpenOffer(true);
  };

  const createHandleClose = (setOpenOffer) => () => {
    setOpenOffer(false);
  };

  return (
    <div className="bgWhite">
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

      <Grid container alignItems='center' direction='column'>
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
              errors={errors}
              name='firstName'
              variant='outlined'
              touched={formState.touched}
              inputRef={register({ required: true })}
            />
          </Grid>
          <Grid className={classes.fieldWrap}>
            <TextFieldWithMaskWrap
              fullWidth
              type='tel'
              name='phone'
              alwaysShowMask
              control={control}
              errors={errors}
              variant='outlined'
              label='Номер телефона *'
              mask="+7 (999) 999-99-99"
              touched={formState.touched}
              rules={{
                required: true,
                validate: {
                  inputTelRequired: isNotFilledTel
                }
              }}
            />
          </Grid>
          <Grid className={classes.fieldWrap}>
            <TextFieldWrap
              fullWidth
              label='Адрес доставки *'
              errors={errors}
              name='address'
              variant='outlined'
              touched={formState.touched}
              inputRef={register({ required: true })}
            />
          </Grid>
          <Grid className={classes.fieldWrap} container direction='row' wrap='nowrap'>
            <TextFieldWrap
              fullWidth
              label='Кв./Офис *'
              type='number'
              errors={errors}
              name='apt'
              variant='outlined'
              touched={formState.touched}
              inputRef={register({ required: true })}
            />
            <div className={classes.fieldGap} />
            <TextFieldWrap fullWidth variant='outlined' inputRef={register} placeholder='Подъезд' name='entrance' />
          </Grid>
          <Grid className={classes.fieldWrap} container direction='row' wrap='nowrap'>
            <TextFieldWrap fullWidth variant='outlined' inputRef={register} placeholder='Этаж' name='floor' />
            <div className={classes.fieldGap} />
            <TextFieldWrap fullWidth variant='outlined' inputRef={register} placeholder='Домофон' name='intercom' />
          </Grid>
          <Grid className={classes.fieldWrap}>
            <TextFieldWrap fullWidth variant='outlined' inputRef={register} placeholder='Комментарий' name='comment' />
          </Grid>
          <Grid className={classes.fieldWrap}>
            <Body1>Кол-во персон:</Body1>
            <Controller
              name='countOfPersons'
              control={control}
              defaultValue={1}
              render={({ value, name, onChange, ...otherProps}) => {
                return (
                  <Counter count={value} onUpdate={onChange} />
                );
              }}
            />
          </Grid>

          <Grid className={classes.fieldWrap}>
            <RadioGroupWrap
              title='Способ оплаты *'
              name='typeOfPayment'
              errors={errors}
              control={control}
              defaultValue='cash'
              rules={{ required: true }}
              touched={formState.touched}
              options={[
                { label: 'Наличными', value: 'cash' },
                { label: 'Банковской картой при получении', value: 'cardAfterDelivery' }
              ]}
            />
          </Grid>

          {
            (getValues('typeOfPayment') === 'cash') && (
              <Grid className={classes.fieldWrap}>
                <TextFieldWrap
                  fullWidth
                  type='number'
                  label='Сдача с:'
                  errors={errors}
                  variant='outlined'
                  name='changeFromCash'
                  touched={formState.touched}
                  inputRef={register({ required: false })}
                />
              </Grid>
            )
          }
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.offer1}
                  onChange={handleChange}
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  name="offer1"
                />
              }
              label={
                <p className={classes.m0}>
                  С
                  <span>
                    <Button
                      variant="text"
                      color="primary"
                      size="small"
                      onClick={createHandleClickOpen(setOpenOffer1)}
                    >
                      условиями доставки
                    </Button>
                    <Dialog
                      open={offer1}
                      onClose={createHandleClose(setOpenOffer1)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        Условия доставки
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <b>Прием заказов</b>: ежедневно с 10:00 до 04:45
                          <br />
                          <br />
                          <b>Территория доставки</b>: Москва, Московская
                          область. Зону доставки по области можно посмотреть на
                          карте доставки или уточнить у оператора колл-центра.
                          <br />
                          <br />
                          <b>Доставка</b>: бесплатно <br />
                          <br />
                          <b>Минимальная сумма заказа</b>: 990 руб. с учетом
                          всех скидок. Минимальную сумму заказа по территории
                          Московской области уточняйте у оператора <br />
                          <br />
                          <b>Время доставки</b>: по Москве (внутри МКАД) — 45
                          минут, по остальной территории время доставки
                          необходимо уточнять у оператора <br />
                          <br />
                          <b>Оплата</b>: наличными курьеру, банковской картой
                          при получении заказа <br />
                          <br />
                        </DialogContentText>
                      </DialogContent>
                    </Dialog>
                  </span>
                  согласен *
                </p>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.offer2}
                  onChange={handleChange}
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  name="offer2"
                />
              }
              label={
                <p className={classes.m0}>
                  Я согласен с
                  <span>
                    <Button
                      variant="text"
                      color="primary"
                      size="small"
                      onClick={createHandleClickOpen(setOpenOffer2)}
                    >
                      условиями доставки
                    </Button>
                    <Dialog
                      open={offer2}
                      onClose={createHandleClose(setOpenOffer2)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        Пользовательское Соглашение
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Настоящее Пользовательское Соглашение (Далее
                          Соглашение) регулирует отношения между владельцем
                          city-menu.ru (далее CityMenu или Администрация) с
                          одной стороны и пользователем сайта с другой. Сайт
                          CityMenu не является средством массовой информации.
                          Используя сайт, Вы соглашаетесь с условиями данного
                          соглашения.
                          <br/>
                          <br/>
                          <b>
                            Если Вы не согласны с условиями данного соглашения,
                            не используйте сайт CityMenu!
                          </b>
                          <br/>
                          <br/>
                          <b>Права и обязанности сторон</b>
                          <b>Пользователь имеет право:</b>- осуществлять поиск
                          информации на сайте - получать информацию на сайте
                          <br/>
                          <br/>
                          <b>Администрация имеет право:</b>- по своему
                          усмотрению и необходимости создавать, изменять,
                          отменять правила - ограничивать доступ к любой
                          информации на сайте - создавать, изменять, удалять
                          информацию
                          <br/>
                          <br/>
                          <b>Пользователь обязуется:</b>- не нарушать
                          работоспособность сайта - не использовать скрипты
                          (программы) для автоматизированного сбора информации
                          и/или взаимодействия с Сайтом и его Сервисами
                          <br/>
                          <br/>
                          <b>Администрация обязуется:</b>- поддерживать
                          работоспособность сайта за исключением случаев, когда
                          это невозможно по независящим от Администрации
                          причинам.
                          <br/>
                          <br/>
                          <b>Ответственность сторон</b>- администрация не несет
                          никакой ответственности за услуги, предоставляемые
                          третьими лицами - в случае возникновения форс-мажорной
                          ситуации (боевые действия, чрезвычайное положение,
                          стихийное бедствие и т. д.) Администрация не
                          гарантирует сохранность информации, размещённой
                          Пользователем, а также бесперебойную работу
                          информационного ресурса
                          <br/>
                          <br/>
                          <b>Условия действия Соглашения</b>
                          Данное Соглашение вступает в силу при любом
                          использовании данного сайта. Соглашение перестает
                          действовать при появлении его новой версии.
                          Администрация оставляет за собой право в одностороннем
                          порядке изменять данное соглашение по своему
                          усмотрению. Администрация не оповещает пользователей
                          об изменении в Соглашении.
                        </DialogContentText>
                      </DialogContent>
                    </Dialog>
                  </span>
                  условиями использования персональных данных *
                </p>
              }
            />
          </FormGroup>
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
                disabled={!formState.isValid || isLoading || !state.offer1 || !state.offer2}
                className={classes.confirmOrderButton}
                startIcon={isLoading && <CircularProgress size={20} />}
              >
                Сделать заказ
              </PrimaryButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
