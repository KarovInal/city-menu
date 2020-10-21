import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Element } from "react-scroll";
import Divider from "@material-ui/core/Divider";
import { noop } from "lodash";
import _ from "lodash/fp";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FlexColumn } from "../flex-column";
import { FlexRow } from "../flex-row";
import { PaddingWrapper } from "../padding-wrapper";
import { PriceBlock, Description, DishOptions, Preview } from "./dish";
import { cartCountByOptionsGetter, cartUpdateCountAction } from "../../modules/cart-module";
import { useDispatch, useSelector } from "react-redux";
import { createSelectedOptionsByDishIdGetter } from "../../modules/select-options-module";
import { EmptyOptionId } from "../../enums";

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

  const optionsByDishIdGetter = useSelector(createSelectedOptionsByDishIdGetter);
  const countGetter = useSelector(cartCountByOptionsGetter)

  const dispatch = useDispatch();

  const createAddToCartHandler = React.useCallback((dishId, isDishFullOpened) => () => {
    let valueIds = EmptyOptionId;

    if (isDishFullOpened) {
      valueIds = _.compose(
        _.cond([
          [_.isUndefined, _.constant(EmptyOptionId)],
          [_.stubTrue,    _.compose(
            _.join("_"),
            _.flatten,
            _.values,
            _.mapValues(
              _.cond([
                [_.isString, _.identity],
                [_.isObject, _.compose(_.keys, _.pickBy(Boolean))],
                [_.stubTrue, _.identity],
              ])
            ),
          )],
        ]),
        optionsByDishIdGetter,
      )(dishId);
    }
    const count = countGetter([dishId, valueIds]);

    // TODO [NZ] 21.10.2020: Add button fake loader
    dispatch(cartUpdateCountAction(dishId, valueIds, count));
  }, [countGetter, dispatch, optionsByDishIdGetter]);

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
                        dishId={id}
                        isDishFullOpened={isDishFullOpened}
                        options={options}
                      />
                      <PriceBlock
                        onClick={createAddToCartHandler(id, isDishFullOpened)}
                        price={price}
                      />
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
