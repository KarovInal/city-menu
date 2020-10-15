import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cn from "classnames";
import { OptionHeader } from "../option-header";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { OptionBody } from "../option-body";
import { reject, isEmpty, prop } from "lodash/fp";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { compose } from "redux";

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
  // TODO [NZ] 16.10.2020: Переделать на взяите значения из reducer selector
  const [selected, setSelected] = useState('300');

  const classes = useStyles();

  if (!isDishFullOpened || !options) {
    return null;
  }

  const optionsWithValues = reject(compose(
    isEmpty,
    prop('values'),
  ))(options);

  return (
    <div>
      {optionsWithValues.map((option, index) => (
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
          <AccordionDetails classes={{root: classes.p0_0_0_14}} key={index}>
            <OptionBody
              selectedValue={selected}
              values={option.values}
              // TODO [NZ] 09.10.2020: Pass `onChange` reducer action
              onChange={() => {
                if (selected === '300') {
                  setSelected('301');
                } else if (selected === '301') {
                  setSelected('302');
                } else {
                  setSelected('300');
                }
              }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
});
