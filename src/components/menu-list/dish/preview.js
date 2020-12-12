import React from 'react';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import vector from "./assets/Vector.svg";
import {noop} from "../../../utils/noop";

const useStyles = makeStyles({
  root: ({ preview, isDishFullOpened }) => ({
    flexShrink: 0,
    transition: 'width .3s ease-in-out',
    position: 'relative',
    width: '140px',
    height: '140px',
    backgroundImage: `url(${preview || 'https://citymenu.s3.eu-north-1.amazonaws.com/dish-preview.png'})`,
    backgroundSize: preview ? 'cover' : '80px',
    border: '0.5px solid rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    borderRadius: '12px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 370px)': {
      width: '110px',
      height: '110px',
    }
  }),
  skipButton: ({ isDishFullOpened }) => ({
    display: "block",
    height: "36px",
    width: "36px",
    position: "absolute",
    right: "10px",
    top: "10px",
    borderRadius: "50%",
    backgroundSize: '14px',
    backgroundPosition: "center center",
    transform: isDishFullOpened ? "" : "rotate(180deg)",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${vector})`,
    backgroundColor: 'rgba(26,26,26,.4)',
    '@media (max-width: 370px)': {
      width: "30px",
      height: "30px",
    }
  }),
});

export const Preview = React.memo(({
  isDishFullOpened, onClick, preview
}) => {
  const classes = useStyles({ isDishFullOpened, preview });

  return (
    <Grid
      item
      container
      className={classes.root}
      style={isDishFullOpened ? { width: '100%', height: '180px' } : {}}
    >
      <div
        className={classes.skipButton}
        onClick={isDishFullOpened ? onClick : noop}
      />
    </Grid>
  );
});
