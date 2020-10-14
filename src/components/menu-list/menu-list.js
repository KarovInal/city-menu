import React, { useState } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import Grid from "@material-ui/core/Grid";
import { Element } from "react-scroll";
import Divider from "@material-ui/core/Divider";
import { noop } from "lodash";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { dishOptionsSelector } from "../../modules/dictionary-module";
import { SecondaryButton } from "../buttons";
import { Price } from "../position/price";
import { FlexColumn } from "../flex-column";
import { FlexRow } from "../flex-row";
import { PaddingWrapper } from "../padding-wrapper";
import { OptionHeader } from "./option-header";
import { OptionBody } from "./option-body";
import { Description, Preview } from "./dish";

const useStyles = makeStyles({
  bottomBlock: {
    paddingTop: "16px",
  },
  m20_0: {
    margin: "20px 0",
  },
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

export const MenuList = React.memo(({ data }) => {
  const dishOptions = useSelector(dishOptionsSelector);

  const classes = useStyles();
  const groupedByCategory = groupBy(data, "category");

  const [state, setState] = useState({});
  const handleOpenDishClick = (id) => () => {
    setState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <PaddingWrapper>
      {map(groupedByCategory, (dishs, categoryKey) => {
        return (
          <Element key={categoryKey} name={categoryKey}>
            {map(
              dishs,
              (
                {
                  title,
                  preview,
                  description,
                  weight,
                  price,
                  category,
                  id,
                  options,
                },
                index
              ) => {
                const isDishFullOpened = state[id];

                return (
                  <div key={index}>
                    <FlexColumn className={classes.m20_0}>
                      <FlexRow>
                        <Grid
                          container
                          spacing={0}
                          onClick={
                            isDishFullOpened ? noop : handleOpenDishClick(id)
                          }
                        >
                          <Preview preview={preview} onClick={() => handleOpenDishClick(id)} isDishFullOpened={isDishFullOpened} />
                          <Description isDishFullOpened={isDishFullOpened} title={title} description={description} weight={weight} />
                        </Grid>
                      </FlexRow>
                      {isDishFullOpened && (
                        <div>
                          {options.map((option, index) => (
                            <Accordion key={index} defaultExpanded classes={{ root: classes.noBoxShadow }}>
                              <AccordionSummary IconButtonProps={{ edge: false }} expandIcon={<ExpandMoreIcon />} classes={{
                                expandIcon: classes.negativeOrder,
                                root: classes.p0,
                                expanded: cn(classes.noMinHeight, classes.m0),
                              }}>
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
                      )}
                      <FlexRow
                        justifyContent="space-between"
                        className={classes.bottomBlock}
                      >
                        <div>
                          <Price price={price} />
                        </div>
                        <div>
                          <SecondaryButton>В конзину</SecondaryButton>
                        </div>
                      </FlexRow>
                    </FlexColumn>
                    <Divider />
                  </div>
                );
              }
            )}
          </Element>
        );
      })}
    </PaddingWrapper>
  );
});
