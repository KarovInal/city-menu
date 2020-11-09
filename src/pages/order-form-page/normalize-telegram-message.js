import get from 'lodash/get';
import map from "lodash/map";
import join from "lodash/join";

const getPaymentTypeTitle = (type, values) => {
  switch (type) {
    case 'cash':
      return `Наличными. Сдача с: ${get(values, 'changeFromCash', 0)} руб.`;
    case 'cardAfterDelivery':
      return 'Банковской картой при получении';
    default:
      return '-';
  }
}

const getDishes = (cartDishes, getDishDataFromCart) => {
  return map(cartDishes, ({ dishId, optionId, count }, index) => {
    const { title = '', optionsFromCart } = getDishDataFromCart(dishId, optionId, true);

    return `${index + 1}. ${title} Кол.: ${count}
    Опции: ${join(map(optionsFromCart, 'title'), ', ')}`;
  });
}

export const normalizeDeliveryMessage = ({values, orderId, cartDishes, getDishDataFromCart, finalPriceWithDiscount}) => {
  return `Доставка: #${orderId}
1. Имя - ${get(values, 'firstName', '-')}
2. Номер телефона - ${get(values, 'phone', '-')}
3. Адрес доставки - ${get(values, 'address', '-')}
4. Кв./Офис - ${get(values, 'apt', '-')}
5. Подъезд - ${get(values, 'entrance', '-')}
6. Этаж - ${get(values, 'floor', '-')}
7. Домофон - ${get(values, 'intercom', '-')}
8. Комментарий - ${get(values, 'comment', '-')}
9. Количество персон - ${get(values, 'countOfPersons', '0')}
10. Способ оплаты - ${getPaymentTypeTitle(get(values, 'typeOfPayment', ''), values)}
---------------------------
*Сумма заказа*: ${finalPriceWithDiscount} руб.
---------------------------
Блюда:
${join(getDishes(cartDishes, getDishDataFromCart), '\n')}`;
}