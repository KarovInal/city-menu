import React, { useState } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import Grid from "@material-ui/core/Grid";
import { Element } from "react-scroll";
import Divider from "@material-ui/core/Divider";
import { fade } from "@material-ui/core";
import { noop } from "lodash";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { gramToText } from "../../utils";
import { dishOptionsSelector } from "../../modules/dictionary-module";
import { SecondaryButton } from "../buttons";
import { Price } from "../position/price";
import { FlexColumn } from "../flex-column";
import { FlexRow } from "../flex-row";
import { Subtitle } from "../typography/subtitle";
import { Body2 } from "../typography/body2";
import { MAX_DESCRIPTION_CHAR_LENGTH } from "./menu-list-constants";
import vector from "./assets/Vector.png";
import { PaddingWrapper } from "../padding-wrapper";
import { OptionHeader } from "./option-header";
import { OptionBody } from "./option-body";

const useStyles = makeStyles((theme) => ({
  preview: {
    height: "140px",
    border: "0.5px solid rgba(0, 0, 0, 0.08)",
    boxSizing: "border-box",
    borderRadius: "12px",
    objectFit: "cover",
    width: "100%",
  },
  openedPreview: {
    height: "180px",
  },
  pl16: {
    paddingLeft: "16px",
  },
  bottomBlock: {
    paddingTop: "16px",
  },
  m20_0: {
    margin: "20px 0",
  },
  description: {
    color: `${theme.mode.secondary.secondaryTextColor} !important`,
  },
  trans: {
    transition: "max-width .2s ease-in-out, flex-basis .2s ease-in-out",
  },
  relative: {
    position: "relative",
  },
  skipButton: {
    transition: "opacity .05s ease-in-out",
    "&:active": {
      cursor: "pointer",
      backgroundColor: fade(theme.mode.primary.primaryTextColor, 0.6),
    },
    display: "block",
    height: "36px",
    width: "36px",
    position: "absolute",
    right: "10px",
    top: "10px",
    borderRadius: "50%",
    transform: "rotate(180deg)",
    backgroundColor: fade(theme.mode.primary.primaryTextColor, 0.4),
    backgroundImage: `url(${vector})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
}));

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
                const previewWidth = isDishFullOpened ? 12 : 4;

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
                          <Grid
                            item
                            xs={previewWidth}
                            className={classes.trans}
                          >
                            <div className={cn(classes.relative)}>
                              <div
                                className={cn({
                                  [classes.skipButton]: isDishFullOpened,
                                })}
                                onClick={
                                  isDishFullOpened
                                    ? handleOpenDishClick(id)
                                    : noop
                                }
                              />
                              <img
                                className={cn(classes.preview, {
                                  [classes.openedPreview]: isDishFullOpened,
                                })}
                                src={preview}
                                alt="dish-preview"
                                draggable="false"
                              />
                            </div>
                          </Grid>
                          <Grid item xs>
                            <div
                              className={cn({
                                [classes.pl16]: !isDishFullOpened,
                              })}
                            >
                              <FlexColumn className={classes.text}>
                                <Subtitle>{title}</Subtitle>
                                <Body2 className={classes.description}>
                                  {description.length >=
                                  MAX_DESCRIPTION_CHAR_LENGTH
                                    ? description.slice(
                                        0,
                                        MAX_DESCRIPTION_CHAR_LENGTH
                                      ) + "..."
                                    : description}
                                </Body2>
                                <Body2 className={classes.description}>
                                  {gramToText(weight)}
                                </Body2>
                              </FlexColumn>
                            </div>
                          </Grid>
                        </Grid>
                      </FlexRow>
                      {isDishFullOpened && (
                        <div>
                          {options.map((option) => (
                            <Accordion defaultExpanded classes={{
                              root: classes.noBoxShadow
                            }}>
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
                                <AccordionDetails classes={{
                                  root: classes.p0_0_0_14,
                                }}>
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
