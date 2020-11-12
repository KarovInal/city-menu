import React from 'react';
import { useSelector } from "react-redux";
import Link from "@material-ui/core/Link";
import Alert from '@material-ui/lab/Alert';
import { useParams, useHistory } from "react-router-dom";
import { getPriceSelector } from "../../selectors/dishes-selector";
import { getDeliveryMinPriceSelector } from "../dictionary-module";

export const MinPriceDelivery = () => {
  const deliveryMinPrice = useSelector(getDeliveryMinPriceSelector);
  const [, priceWithDiscountInCart] = useSelector(getPriceSelector)(true);
  const params = useParams();
  const history = useHistory();
  const { cafe } = params;

  if(priceWithDiscountInCart > deliveryMinPrice) {
    return null;
  }

  return (
    <Alert severity="warning">
      <b>Минимальная сумма заказа составляет {deliveryMinPrice} руб.</b>
      <br />
      До оформления заказа осталось немного: {deliveryMinPrice - priceWithDiscountInCart} руб.
      <br />
      <Link onClick={() => history.push(`/${cafe}`)} color="inherit">
        <b>Вернуться к блюдам</b>
      </Link>
    </Alert>
  );
}
