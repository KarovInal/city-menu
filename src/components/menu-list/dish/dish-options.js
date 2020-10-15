import React from "react";
import map from 'lodash/map';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cn from "classnames";
import { OptionHeader } from "../option-header";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { OptionBody } from "../option-body";
import { noop } from "lodash";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useSelector } from "react-redux";
import { dishOptionsSelector } from "../../../modules/dictionary-module";

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

export const DishOptions = React.memo(({ isDishFullOpened, options }) => {
  const dishOptions = useSelector(dishOptionsSelector);

  const classes = useStyles();

  if (!isDishFullOpened) {
    return null;
  }

  return (
    <div>
      {map(options, (option, index) => (
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
          {option.values.map((value, index, values) => (
            <AccordionDetails classes={{ root: classes.p0_0_0_14 }} key={index}>
              <OptionBody
                option={dishOptions[value]}
                values={values}
                // TODO [NZ] 09.10.2020: Pass `onChange` handler
                onChange={noop}
              />
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );
});
