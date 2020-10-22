import React, {useState, Fragment} from 'react';
import map from 'lodash/map';
import toNumber from 'lodash/toNumber';
import { useSelector } from "react-redux";
import { Close } from "@material-ui/icons";
import ReactPlayer from "react-player/file";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrimaryButton } from "../../components/buttons";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { getRecommendationsSelector } from "../../modules/recommendations-module/recommendations-selector";

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
    playIcon: {
        left: '50%',
        top: '50%',
        zIndex: 9999,
        color: '#fff',
        padding: '10px',
        marginTop: '-32px',
        marginLeft: '-32px',
        position: 'absolute',
        borderRadius: '100%',
        width: '64px !important',
        height: '64px !important',
        backgroundColor: 'rgba(26, 26, 26, .4)',
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
    const recommendations = useSelector(getRecommendationsSelector);
    const [isPlayVideo, setIsPlayVideo] = useState(false);
    const { activeSlide = 0 } = useParams();

    const onClickVideo = () => {
        setIsPlayVideo(!isPlayVideo);
    };

    const renderImage = ({ content, index }) => {
        return (
          <div
            key={index}
            className={classes.imageContent}
            style={{ backgroundImage: `url('${content}')` }}
          />
        );
    };

    const renderVideo = ({ content, preview, index, isActive }) => {
        return (
          <Fragment>
              {
                  !isPlayVideo && (
                    <PlayArrowIcon className={classes.playIcon} />
                  )
              }
              <ReactPlayer
                key={index}
                width='100%'
                height='100%'
                muted={true}
                url={content}
                controls={false}
                autoPlay={false}
                playsinline={true}
                playing={isActive && isPlayVideo}
                config={{
                    file: {
                        attributes: {
                            poster: preview
                        }
                    }
                }}
              />
          </Fragment>
        );
    };

    const handleSlideChange = () => {
        setIsPlayVideo(false);
    }

    return (
      <Swiper loop initialSlide={toNumber(activeSlide) || 0} onSlideChange={handleSlideChange} direction='vertical' setWrapperSize className={classes.root}>
          <Close className={classes.closeIcon} onClick={() => history.push('/')} />
          <KeyboardArrowUpIcon className={classes.upIcon} />
          {
              map(recommendations,
                ({
                     type,
                     content,
                     preview,
                     buttonTitle,
                     resourceUrl,
                     contentTitle,
                     contentSubTitle,
                }, index) => {
                  return (
                    <SwiperSlide onClick={onClickVideo} key={index} className={classes.slide}>
                        {
                            ({ isActive }) => (
                              <Fragment>
                                  { type === 'video' && renderVideo({ content, preview, index, isActive }) }
                                  { type === 'image' && renderImage({ content, index }) }
                                  <div className={classes.contentWrap} onClick={e => e.stopPropagation()}>
                                      { contentTitle && (
                                        <span className={classes.title}>{ contentTitle }</span>
                                      )}
                                      { contentSubTitle && (
                                        <span className={classes.subTitle}>{ contentSubTitle }</span>
                                      )}
                                      <PrimaryButton className={classes.actionButton} onClick={() => history.push(resourceUrl)}>
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
