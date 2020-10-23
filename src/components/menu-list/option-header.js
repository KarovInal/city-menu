import React from "react";
import { FlexOne } from "../flex-one";
import { Subtitle } from "../typography/subtitle";
import { Body1 } from "../typography/body1";
import { FlexRow } from "../flex-row";

export const OptionHeader = React.memo(({ title, totalPrice }) => (
  <FlexRow width="100%">
    <FlexOne>
      <Subtitle>{title}</Subtitle>
    </FlexOne>
    <div>
      <Body1 medium>+{totalPrice} ₽</Body1>
    </div>
  </FlexRow>
));
