import { useEffect } from 'react';
import { Analytics } from "aws-amplify";
import includes from 'lodash/includes';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDishesAsArraySelector, getPriceSelector } from "../../selectors/dishes-selector";

export const PageView = ({ children, pageName }) => {
  const history = useHistory();
  const orderDishes = useSelector(getDishesAsArraySelector)(false);
  const [, priceWithDiscountInOrder] = useSelector(getPriceSelector)(false);
  const cartDishes = useSelector(getDishesAsArraySelector)(true);
  const [, priceWithDiscountInCart] = useSelector(getPriceSelector)(true);

  const pageViewRequest = ({ pathname }) => {
    let attributes = {};

    if(includes(pathname, '/cart')) {
      attributes.page_name = 'CART';
      attributes.final_price = `${priceWithDiscountInCart}`;
      attributes.dishes = JSON.stringify(cartDishes);
    }
    else if(includes(pathname, '/order')) {
      attributes.page_name = 'ORDER';
      attributes.final_price = `${priceWithDiscountInOrder}`;
      attributes.dishes = JSON.stringify(orderDishes);
    } else if(includes(pathname, '/stories'))
      attributes.page_name = 'STORIES';
    else
      attributes.page_name = 'INDEX';

    Analytics.record({
      name: 'pageView',
      attributes,
    });
  }

  useEffect(() => {
    pageViewRequest(history.location);
    history.listen(pageViewRequest);
    // eslint-disable-next-line
  }, []);

  return children;
};
