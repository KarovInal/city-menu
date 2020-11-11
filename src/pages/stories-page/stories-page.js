import React, { Fragment } from 'react';
import map from 'lodash/map';
import toNumber from 'lodash/toNumber';
import { useSelector } from "react-redux";
import { Close } from "@material-ui/icons";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrimaryButton } from "../../components/buttons";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { getRecommendationsSelector } from "../../modules/recommendations-module/recommendations-selector";
import { VideoComponent } from "./video-component";
import { Analytics } from "aws-amplify";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        fontFamily: 'Montserrat',
        backgroundColor: theme.mode.secondary.secondaryColor,
    },
    closeIcon: {
        top: '24px',
        left: '24px',
        zIndex: 9999,
        color: '#fff',
        padding: '10px',
        position: 'absolute',
        borderRadius: '100%',
        backgroundColor: 'rgba(26, 26, 26, .4)',
    },
    upIcon: {
        left: '50%',
        zIndex: 9999,
        width: '24px',
        color: '#fff',
        bottom: '12px',
        height: '24px',
        marginLeft: '-12px',
        position: 'absolute',
    },
    slide: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(26, 26, 26, .4)',
    },
    imageContent: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    contentWrap: {
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '999',
        position: 'absolute',
        padding: '24px 24px 24px 24px',
        background: 'linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #1A1A1A 100%)',
    },
    title: {
        color: '#fff',
        fontSize: '24px',
        display: 'block',
        fontWeight: '600',
    },
    subTitle: {
        display: 'block',
        fontSize: '16px',
        fontWeight: '600',
        color: 'rgba(255, 255, 255, .7)',
    },
    actionButton: {
        width: '100%',
        height: '56px',
        fontSize: '20px',
        marginTop: '24px',
        fontWeight: '600',
        marginBottom: '24px',
        fontFamily: 'Montserrat',
    },
}));

export const StoriesPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const { activeSlide = 0 } = useParams();
    const recommendations = useSelector(getRecommendationsSelector);

    const renderImage = ({ content, index }) => {
        return (
          <div
            key={index}
            className={classes.imageContent}
            style={{ backgroundImage: `url('${content}')` }}
          />
        );
    };

    const handleCtaClick = ({ resourceUrl, id }) => {
        Analytics.record({
            name: 'click',
            attributes: {
                'click-page-name': 'STORIES',
                'click-type': 'CTA',
                'click-storie': `${id}`,
            },
        });

        history.push(resourceUrl);
    }

    const params = useParams();

    const { cafe } = params;

    const goHome = () => {
        history.push(`/${cafe}`);
    }

    return (
      <Swiper loop initialSlide={toNumber(activeSlide) || 0} direction='vertical' setWrapperSize watchSlidesVisibility className={classes.root}>
          <Close className={classes.closeIcon} onClick={goHome} />
          <KeyboardArrowUpIcon className={classes.upIcon} />
          {
              map(recommendations,
                ({
                     id,
                     type,
                     content,
                     preview,
                     buttonTitle,
                     resourceUrl,
                     contentTitle,
                     contentSubTitle,
                }, index) => {
                  return (
                    <SwiperSlide key={index} className={classes.slide}>
                        {
                            ({ isVisible, isActive }) => (
                              <Fragment>
                                  {type === 'video' && (
                                    <VideoComponent
                                      index={index}
                                      classes={classes}
                                      content={content}
                                      preview={preview}
                                      isVisible={isVisible || isActive}
                                    />
                                  )}
                                  {type === 'image' && renderImage({ content, index })}
                                  <div className={classes.contentWrap} onClick={e => e.stopPropagation()}>
                                      { contentTitle && (
                                        <span className={classes.title}>{ contentTitle }</span>
                                      )}
                                      { contentSubTitle && (
                                        <span className={classes.subTitle}>{ contentSubTitle }</span>
                                      )}
                                      <PrimaryButton className={classes.actionButton} onClick={() => handleCtaClick({ resourceUrl: `/${cafe}${resourceUrl}`, id })}>
                                          { buttonTitle }
                                      </PrimaryButton>
                                  </div>
                              </Fragment>
                            )
                        }
                    </SwiperSlide>
                  )
              })
          }
      </Swiper>
    );
};
