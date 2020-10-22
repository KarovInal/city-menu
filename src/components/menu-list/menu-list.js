import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Element } from "react-scroll";
import Divider from "@material-ui/core/Divider";
import { noop } from "lodash";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FlexColumn } from "../flex-column";
import { FlexRow } from "../flex-row";
import { PaddingWrapper } from "../padding-wrapper";
import { PriceBlock, Description, DishOptions, Preview } from "./dish";

const useStyles = makeStyles({
  m20_0: {
    margin: "20px 0",
  },
});

export const MenuList = React.memo(({ data }) => {
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
                  <Element key={index} name={`${id}`}>
                    <FlexColumn className={classes.m20_0}>
                      <FlexRow>
                        <Grid
                          container
                          spacing={0}
                          onClick={
                            isDishFullOpened ? noop : handleOpenDishClick(id)
                          }
                        >
                          <Preview
                            preview={preview}
                            onClick={() => handleOpenDishClick(id)}
                            isDishFullOpened={isDishFullOpened}
                          />
                          <Description
                            isDishFullOpened={isDishFullOpened}
                            title={title}
                            description={description}
                            weight={weight}
                          />
                        </Grid>
                      </FlexRow>
                      <DishOptions
                        isDishFullOpened={isDishFullOpened}
                        options={options}
                      />
                      <PriceBlock price={price} />
                    </FlexColumn>
                    <Divider />
                  </Element>
                );
              }
            )}
          </Element>
        );
      })}
    </PaddingWrapper>
  );
});
