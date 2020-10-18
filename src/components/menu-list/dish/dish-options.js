import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cn from "classnames";
import { OptionHeader } from "../option-header";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { OptionBody } from "../option-body";
import _ from "lodash/fp";
import { get } from "lodash";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxOptionsChange,
  createGetSelectedOptionsByDishId,
  radioOptionsChange,
} from "../../../modules/select-options-module";
import { dishOptionsSelector } from "../../../modules/dictionary-module";
import { EOptionType } from "../../../enums";

const useStyles = makeStyles({
  negativeOrder: {
    order: "-1",
  },
  p0: {
    padding: "0",
  },
  p0_0_0_14: {
    padding: "0 0 0 14px !important",
  },
  m0: {
    margin: "0 !important",
  },
  noBoxShadow: {
    boxShadow: "none",
  },
  noMinHeight: {
    minHeight: "0 !important",
  },
});

export const DishOptions = React.memo(({ isDishFullOpened, options, dishId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rejectEmptyValues = _.reject(compose(_.isEmpty, _.prop("values")));
  const isRadioType = _.isEqual(EOptionType.Radio);
  const isCheckBoxType = _.isEqual(EOptionType.CheckBox);

  React.useEffect(() => {
    if (!options) {
      return;
    }

    _.compose(
      _.forEach(({ optionId, type, values }) => {
        if (isRadioType(type)) {
          dispatch(
            radioOptionsChange({
              dishId,
              optionId,
              value: _.first(values),
            })
          )
        }

        if (isCheckBoxType(type)) {
          dispatch(
            checkboxOptionsChange({
              dishId,
              optionId,
              value: {
                [_.first(values)]: true,
              },
            })
          )
        }
      }),
      rejectEmptyValues,
    )(options);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedOptionsByDishId = useSelector(createGetSelectedOptionsByDishId(dishId));
  const dishOptions = useSelector(dishOptionsSelector);

  if (!isDishFullOpened || !options) {
    return null;
  }

  const optionsWithValues = rejectEmptyValues(options);

  return (
    <div>
      {optionsWithValues.map((option, index) => {
        const selected = selectedOptionsByDishId[option.optionId];

        let selectedOption = { price: 0 };

        if (_.isObject(selected)) {
          // Checkbox
          selectedOption = {
            price: _.compose(
              _.sum,
              _.map((key) => get(dishOptions, [key, 'price'])),
              _.keys,
              _.pickBy(_.identity),
            )(selected),
          };
        } else if (_.isString(selected)) {
          // Radio
          selectedOption = dishOptions[selected];
        }

        return (
          <Accordion
            key={index}
            defaultExpanded
            classes={{ root: classes.noBoxShadow }}
          >
            <AccordionSummary
              IconButtonProps={{ edge: false }}
              expandIcon={<ExpandMoreIcon />}
              classes={{
                expandIcon: classes.negativeOrder,
                root: classes.p0,
                expanded: cn(classes.noMinHeight, classes.m0),
              }}
            >
              <OptionHeader
                title={option.title}
                totalPrice={selectedOption.price}
              />
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.p0_0_0_14 }} key={index}>
              <OptionBody
                selectedValue={selected}
                type={option.type}
                values={option.values}
                onChange={({ target: { value, checked }}) => {
                  if (isRadioType(option.type)) {
                    dispatch(
                      radioOptionsChange({
                        dishId,
                        optionId: option.optionId,
                        value,
                      })
                    );
                  }

                  if (isCheckBoxType(option.type)) {
                    dispatch(
                      checkboxOptionsChange({
                        dishId,
                        optionId: option.optionId,
                        value: {
                          [value]: checked,
                        },
                      })
                    );
                  }
                }}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
});
