import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { FlexOne } from "../flex-one";
import { FlexRow } from "../flex-row";
import { Body2 } from "../typography/body2";
import { Flex } from "../flex";
import { useSelector } from "react-redux";
import { dishOptionsSelector } from "../../modules/dictionary-module";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "0",
  },
  label: {
    width: "100%",
  },
  disabledTextColor: {
    color: theme.mode.primary.disabledTextColor,
  },
  primaryColor: {
    color: `${theme.mode.primary.primaryColor} !important`,
  },
  userSelectNone: {
    userSelect: "none",
  },
}));

export const OptionBody = React.memo(({
  values, selectedValue, onChange,
}) => {
  const classes = useStyles();
  const dishOptions = useSelector(dishOptionsSelector);

  return (
    <FormControl fullWidth component="fieldset">
      <FlexRow>
        <FlexOne>
          <RadioGroup value={selectedValue} onChange={onChange}>
            {values.map((value, index) => {
              const option = dishOptions[value];

              return (
                <FormControlLabel
                  key={index}
                  classes={{ root: classes.root, label: classes.label }}
                  label={
                    <Flex justifyContent="space-between">
                      <div className={classes.userSelectNone}>
                        {option.title}
                      </div>
                      <div>
                        <Body2 className={classes.disabledTextColor}>
                          {option.price > 0 ? "+" : ""}
                          {option.price} ₽
                        </Body2>
                      </div>
                    </Flex>
                  }
                  value={option.id}
                  disabled={!option.available}
                  control={<Radio classes={{ checked: classes.primaryColor }} />}
                />
              );
            })}
          </RadioGroup>
        </FlexOne>
      </FlexRow>
    </FormControl>
  );
});
