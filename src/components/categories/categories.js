import React, { useState, useRef, useEffect } from 'react';
import map from 'lodash/map';
import { Link } from 'react-scroll';
import { Sticky } from 'react-sticky';
import { CircleButton } from "../buttons";
import Grid from "@material-ui/core/Grid";
import scrollIntoView from 'scroll-into-view-if-needed';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles(theme => ({
  root: {
    height: '64px',
    overflowY: 'auto',
    padding: '0 16px',
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
  }
}));

export const Categories = ({ categories = {} }) => {
  const classes = useStyle();
  const categoryRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const idx = window.location.href.indexOf("#");
    const hash = idx != -1 ? url.substring(idx+1) : "";

    setActiveCategory(hash);
  }, []);

  useEffect(() => {
    if(categoryRef && categoryRef.current) {
      scrollIntoView(categoryRef.current, {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }, [activeCategory]);

  return (
    <Sticky topOffset={-60}>
      {({ style, isSticky }) => (
        <Grid
          container
          wrap='nowrap'
          spacing={0}
          direction='row'
          alignItems='center'
          id='categoriesList'
          className={classes.root}
          style={{ ...style, top: isSticky ? 60 : 0 }}
        >
          {
            map(categories, (categoryTitle, categoryKey) => (
              <div key={categoryKey} ref={(categoryKey === activeCategory) && categoryRef}>
                <Link offset={-60} hashSpy onSetActive={setActiveCategory} spy={true} to={categoryKey}>
                  <CircleButton
                    disableRipple
                    color={activeCategory === categoryKey ? 'primary' : 'default'}
                    variant={activeCategory === categoryKey ? 'contained' : 'text'}
                  >
                    { categoryTitle }
                  </CircleButton>
                </Link>
              </div>
            ))
          }
        </Grid>
      )}
    </Sticky>
  );
}
