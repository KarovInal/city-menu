import React from 'react';
import { Title } from "../typography/title";

export const Price = React.memo(({ price }) => (
  <Title>{price} ₽</Title>
));
