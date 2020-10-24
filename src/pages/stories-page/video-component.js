import React, {useEffect, useRef, useState} from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { makeStyles } from "@material-ui/core";
import invoke from "lodash/invoke";
import set from "lodash/set";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    objectFit: 'cover',
  },
  storyVideoPreview: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundColor: 'black',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  overlayButtons: {
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
}));

const getPreviewStyle = (isFirstPlay, preview) => ({
  backgroundImage: `url(${preview})`,
  display: isFirstPlay ? 'block' : 'none',
});

export const VideoComponent = ({ content, preview, isVisible }) => {
  const classes = useStyles();
  const videoRef = useRef();
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const [isPlayVideo, setIsPlayVideo] = useState(false);
  const [videoIsLoading, setVideoIsLoading] = useState(true);

  const handlePlay = () => {
    isFirstPlay && set(videoRef, 'current.src', content);
    isPlayVideo
      ? invoke(videoRef, 'current.pause')
      : invoke(videoRef, 'current.play')

    setIsPlayVideo(!isPlayVideo);
    setIsFirstPlay(false);
  };

  useEffect(() => {
    if(!isVisible) {
      setIsFirstPlay(true);
      setIsPlayVideo(false);
      set(videoRef, 'current.src', null);
    }
  }, [isVisible]);

  return (
    <div className={classes.root} onClick={handlePlay}>
      <div
        className={classes.storyVideoPreview}
        style={getPreviewStyle(isFirstPlay, preview)}
      />
      <video
        playsInline
        muted={true}
        ref={videoRef}
        preload='auto'
        className={classes.root}
        onWaiting={() => setVideoIsLoading(true)}
        onCanPlayThrough={() => setVideoIsLoading(false)}
      />
      {
        !isPlayVideo && (
          <PlayArrowIcon className={classes.overlayButtons} />
        )
      }
      {
        isPlayVideo && videoIsLoading && (
          <CircularProgress className={classes.overlayButtons} />
        )
      }
    </div>
  )
}
