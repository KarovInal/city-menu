import {getDeliveryMinPriceSelector} from "../dictionary-module";
import {getPriceSelector} from "../../selectors/dishes-selector";

export const ableToDeliverySelector = state => {
  const deliveryMinPrice = getDeliveryMinPriceSelector(state);
  const [, priceWithDiscountInCart] = getPriceSelector(state)(true);

  return deliveryMinPrice <= priceWithDiscountInCart;
}
