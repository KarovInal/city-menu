import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import cn from "classnames";
import { FlexOne } from "../flex-one";
import { FlexRow } from "../flex-row";
import { Body2 } from "../typography/body2";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  disabledTextColor: {
    color: theme.mode.primary.disabledTextColor,
  },
  primaryColor: {
    color: `${theme.mode.primary.primaryColor} !important`,
  },
}));

export const OptionBody = React.memo(({ values, option, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth component="fieldset">
      <FlexRow>
        <FlexOne>
          <RadioGroup value={values[0]} onChange={onChange}>
            <FormControlLabel
              label={option.title}
              value={option.id}
              disabled={!option.available}
              control={<Radio classes={{ checked: classes.primaryColor }} />}
            />
          </RadioGroup>
        </FlexOne>
        <div className={cn(classes.alignItemsCenter, classes.flex)}>
          <Body2 className={classes.disabledTextColor}>
            {option.price > 0 ? "+" : ""}
            {option.price} ₽
          </Body2>
        </div>
      </FlexRow>
    </FormControl>
  );
});
