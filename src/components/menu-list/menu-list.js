import React, { useState } from 'react';
import cn from 'classnames';
import Grid from "@material-ui/core/Grid";
import { Element } from 'react-scroll';
import Divider from "@material-ui/core/Divider";
import { fade } from "@material-ui/core";
import { noop } from "lodash";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { gramToText } from "../../utils";
import { SecondaryButton } from "../buttons";
import { Price } from "../position/price";
import { FlexColumn } from "../flex-column";
import { FlexRow } from "../flex-row";
import { Subtitle } from "../typography/subtitle";
import { Body2 } from "../typography/body2";
import { MAX_DESCRIPTION_CHAR_LENGTH } from "./menu-list-constants";
import vector from './assets/Vector.png'

export const useStyles = makeStyles((theme) => ({
  preview: {
    height: '140px',
    border: '0.5px solid rgba(0, 0, 0, 0.08)',
    boxSizing: 'border-box',
    borderRadius: '12px',
    objectFit: 'cover',
    width: '100%',
  },
  openedPreview: {
    height: '180px',
  },
  pl16: {
    paddingLeft: '16px',
  },
  bottomBlock: {
    paddingTop: '16px',
  },
  m20_0: {
    margin: '20px 0',
  },
  description: {
    color: `${theme.mode.secondary.secondaryTextColor} !important`,
  },
  trans: {
    transition: 'max-width .2s ease-in-out, flex-basis .2s ease-in-out',
  },
  relative: {
    position: 'relative',
  },
  skipButton: {
    transition: 'opacity .05s ease-in-out',
    '&:active': {
      cursor: 'pointer',
      backgroundColor: fade(theme.mode.primary.primaryTextColor, 0.6),
    },
    display: 'block',
    height: '36px',
    width: '36px',
    position: 'absolute',
    right: '10px',
    top: '10px',
    borderRadius: '50%',
    backgroundColor: fade(theme.mode.primary.primaryTextColor, 0.4),
    backgroundImage: `url(${vector})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

export const MenuList = React.memo(({ data }) => {
  const classes = useStyles();
  const groupedByCategory = groupBy(data, 'category');

  const [state, setState] = useState({});
  const handleOpenDishClick = (id) => () => {
    setState((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div>
      {
        map(groupedByCategory, (dishs, categoryKey) => {
          return (
            <Element key={categoryKey} name={categoryKey}>
              {
                map(dishs, ({title, preview, description, weight, price, category, id}, index) => {
                  const isDishFullOpened = state[id];
                  const previewWidth = isDishFullOpened ? 12 : 4;

                  return (
                    <div key={index}>
                      <FlexColumn className={classes.m20_0}>
                        <FlexRow>
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={previewWidth}
                              onClick={isDishFullOpened ? noop : handleOpenDishClick(id)}
                              className={classes.trans}
                            >
                              <div className={cn(classes.relative)}>
                                <div
                                  className={cn({[classes.skipButton]: isDishFullOpened})}
                                  onClick={isDishFullOpened ? handleOpenDishClick(id) : noop}
                                />
                                <img
                                  className={cn(classes.preview, {[classes.openedPreview]: isDishFullOpened} )}
                                  src={preview}
                                  alt="dish-preview"
                                  draggable="false"
                                />
                              </div>
                            </Grid>
                            <Grid item xs>
                              <div className={cn({[classes.pl16]: !isDishFullOpened} )}>
                                <FlexColumn className={classes.text}>
                                  <Subtitle>{title}</Subtitle>
                                  <Body2 className={classes.description}>
                                    {
                                      description.length >= MAX_DESCRIPTION_CHAR_LENGTH
                                        ? description.slice(0, MAX_DESCRIPTION_CHAR_LENGTH) + '...'
                                        : description
                                    }
                                  </Body2>
                                  <Body2 className={classes.description}>{gramToText(weight)}</Body2>
                                </FlexColumn>
                              </div>
                            </Grid>
                          </Grid>
                        </FlexRow>
                        <FlexRow justifyContent="space-between" className={classes.bottomBlock}>
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
                  )
                })
              }
            </Element>
          );
        })
      }
    </div>
  );
});
