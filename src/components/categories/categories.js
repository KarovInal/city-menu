import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Sticky } from 'react-sticky';
import { CircleButton } from "../buttons";
import { Swiper, SwiperSlide } from 'swiper/react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import 'swiper/swiper-bundle.css';

const useStyle = makeStyles(theme => ({
  root: {
    zIndex: 999,
    height: '60px',
    overflowY: 'auto',
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
  },
  swiper: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
  },
  slide: {
    height: 'auto',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderGap: {
    height: '1px',
    width: '13px',
  }
}));

export const Categories = ({ categories = {} }) => {
  const classes = useStyle();
  const [activeCategory, setActiveCategory] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const onSetActive = (activeCategory, slideIndex) => {
    setActiveCategory(activeCategory);
    controlledSwiper && controlledSwiper.slideTo(slideIndex, 0);
  }

  return (
    <Sticky topOffset={-60}>
      {({ style, isSticky }) => (
        <div
          className={classes.root}
          style={{ ...style, top: isSticky ? 60 : 0, boxShadow: isSticky ? '0px 2px 4px rgba(0, 0, 0, 0.08)' : 'none' }}
        >
          <Swiper
            freeMode
            height={60}
            slidesPerView='auto'
            className={classes.swiper}
            onSwiper={setControlledSwiper}
          >
            <SwiperSlide className={classes.sliderGap} />
            {
              Object.keys(categories).map((categoryKey, index, categoriesArray) => {
                const { category, title } = categories[categoryKey];

                return (
                  <SwiperSlide className={classes.slide} key={index}>
                    <Link
                      spy={true}
                      to={category}
                      offset={-120}
                      onSetActive={activeCategory => onSetActive(activeCategory, index)}
                    >
                      <CircleButton
                        disableRipple
                        color={activeCategory === category ? 'primary' : 'default'}
                        variant={activeCategory === category ? 'contained' : 'text'}
                      >
                        { title }
                      </CircleButton>
                    </Link>
                  </SwiperSlide>
                );
              })
            }
            <SwiperSlide className={classes.sliderGap} />
          </Swiper>
        </div>
      )}
    </Sticky>
  );
}
