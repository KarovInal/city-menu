import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cn from "classnames";
import { OptionHeader } from "../option-header";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { OptionBody } from "../option-body";
import { reject, isEmpty, prop, forEach, first } from "lodash/fp";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
  createGetSelectedOptionsByDishId,
  radioOptionsChange,
} from "../../../modules/select-options-module";

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

  React.useEffect(() => {
    if (!options) {
      return;
    }

    compose(
      forEach(({ optionId, values }) => {
        dispatch(
          radioOptionsChange({
            dishId,
            optionId,
            value: first(values),
          })
        );
      }),
      reject(compose(isEmpty, prop("values")))
    )(options);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedOptionsByDishId = useSelector(createGetSelectedOptionsByDishId(dishId));

  if (!isDishFullOpened || !options) {
    return null;
  }

  const optionsWithValues = reject(compose(
    isEmpty,
    prop('values'),
  ))(options);

  return (
    <div>
      {optionsWithValues.map((option, index) => {
        const selected = selectedOptionsByDishId[option.optionId];

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
                // TODO [NZ] 09.10.2020: Pass correct total price
                totalPrice={0}
              />
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.p0_0_0_14 }} key={index}>
              <OptionBody
                selectedValue={selected}
                values={option.values}
                onChange={({ target: { value }}) => {
                  dispatch(
                    radioOptionsChange({
                      dishId,
                      optionId: option.optionId,
                      value,
                    })
                  );
                }}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
});
