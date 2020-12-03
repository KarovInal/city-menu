import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Element } from "react-scroll";
import _ from "lodash/fp";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import TrackVisibility from 'react-on-screen';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { PaddingWrapper } from "../padding-wrapper";
import { PriceBlock, Description, DishOptions, Preview } from "./dish";
import { cartCountByOptionsGetter, cartUpdateCountAction } from "../../modules/cart-module";
import { useDispatch, useSelector } from "react-redux";
import { createSelectedOptionsByDishIdGetter } from "../../modules/select-options-module";
import { Analytics } from "aws-amplify";
import { EmptyOptionId } from "../../db/common-enums";
import { Title } from "../typography/title";
import { Flex } from "../flex";
import {Divider} from "@material-ui/core";
import {noop} from "../../utils/noop";

const useStyles = makeStyles({
  m20_0: {
    margin: "20px 0",
  },
  pb66: {
    paddingBottom: "66px",
  },
  fw700: {
    marginTop: '20px',
    fontWeight: "700",
  },
  placeholderMenuItem: {
    width: '100%',
    height: '199px',
    margin: '20px 0',
    borderRadius: '12px',
    backgroundColor: '#f7f7f7'
  }
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
          <Element key={categoryKey} name={categoryKey}>
            <Flex><Title className={classes.fw700}>{categories[categoryKey]?.title}</Title></Flex>
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
                      <TrackVisibility partialVisibility offset={300}>
                        {({ isVisible }) => {
                          if(isVisible) {
                            return (
                              <div className={classes.m20_0}>
                                <Grid
                                  onClick={isDishFullOpened ? noop : handleOpenDishClick(id)}
                                  container direction="row" wrap={isDishFullOpened ? 'wrap' : 'nowrap'}
                                >
                                  <Preview
                                    preview={preview}
                                    onClick={handleOpenDishClick(id)}
                                    isDishFullOpened={isDishFullOpened}
                                  />
                                  <Description
                                    title={title}
                                    weight={weight}
                                    description={description}
                                    isDishFullOpened={isDishFullOpened}
                                  />
                                </Grid>
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
                              </div>
                            );
                          }

                          return <div className={classes.placeholderMenuItem} />
                        }}
                      </TrackVisibility>
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
