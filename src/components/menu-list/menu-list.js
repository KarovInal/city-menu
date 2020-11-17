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
import { Analytics } from "aws-amplify";
import { EmptyOptionId } from "../../db/common-enums";
import { Title } from "../typography/title";
import { Flex } from "../flex";

const useStyles = makeStyles({
  m20_0: {
    margin: "20px 0",
  },
  pb66: {
    paddingBottom: "66px",
  },
  fw700: {
    fontWeight: "700",
  },
});

export const MenuList = React.memo(({ data, categories }) => {
  const classes = useStyles();
  const groupedByCategory = groupBy(data, "category");

  const [state, setState] = useState({});
  const handleOpenDishClick = (id) => () => {
    Analytics.record({
      name: 'click',
      attributes: {
        'click-dish': `${id}`,
        'click-type': "open_dish",
        'click-page-name': 'INDEX',
      },
    });

    setState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const optionsByDishIdGetter = useSelector(createSelectedOptionsByDishIdGetter);
  const countGetter = useSelector(cartCountByOptionsGetter)

  const dispatch = useDispatch();

  const createAddToCartHandler = React.useCallback((dishId) => () => {
    const valueIds = _.compose(
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
    const count = countGetter([dishId, valueIds]);

    dispatch(cartUpdateCountAction(dishId, valueIds, count));
    Analytics.record({
      name: 'click',
      attributes: {
        'click-dish': `${dishId}`,
        'click-page-name': 'INDEX',
        'click-type': "add_to_cart",
        'click-options': `${valueIds}`,
      },
    });
  }, [countGetter, dispatch, optionsByDishIdGetter]);

  return (
    <PaddingWrapper className={classes.pb66}>
      {map(groupedByCategory, (dishs, categoryKey) => {
        return (
          <>
            <Flex><Title className={classes.fw700}>{categories[categoryKey]?.title}</Title></Flex>
            <Element key={categoryKey} name={categoryKey}>
              {map(
                dishs,
                (
                  {
                    title,
                    preview,
                    description = '',
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
                          dishId={id}
                          isDishFullOpened={isDishFullOpened}
                          options={options}
                        />
                        <PriceBlock
                          addOptionsPrice={isDishFullOpened}
                          showLoader={_.isEmpty(options) || isDishFullOpened}
                          onClick={
                            (!_.isEmpty(options) && !isDishFullOpened)
                              ? handleOpenDishClick(id)
                              : createAddToCartHandler(id)
                          }
                          price={price}
                          dishId={id}
                        />
                      </FlexColumn>
                      <Divider />
                    </Element>
                  );
                }
              )}
            </Element>
          </>
        );
      })}
    </PaddingWrapper>
  );
});
