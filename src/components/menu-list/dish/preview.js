import React from 'react';
import cn from "classnames";
import { noop } from "lodash";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { fade } from "@material-ui/core";
import vector from "./assets/Vector.png";

const useStyles = makeStyles((theme) => ({
  preview: ({ isDishFullOpened }) => ({
    minWidth: "96px",
    minHeight: "96px",
    maxWidth: isDishFullOpened ? '' : "140px",
    maxHeight: isDishFullOpened ? "180px" : "140px",
    border: "0.5px solid rgba(0, 0, 0, 0.08)",
    boxSizing: "border-box",
    borderRadius: "12px",
    objectFit: "cover",
    width: "100%",
  }),
  previewWrapper: ({ isDishFullOpened }) => ({
    width: isDishFullOpened ? '' : "140px",
    height: isDishFullOpened ? "180px" : "140px",
  }),
  openedPreview: {
    height: "180px",
  },
  transition: {
    transition: "max-width .1s ease-in-out, flex-basis .1s ease-in-out",
  },
  relative: {
    position: "relative",
  },
  rotate: {
    transform: "rotate(180deg)",
  },
  skipButton: {
    transition: "opacity .05s ease-in-out",
    "&:active": {
      cursor: "pointer",
      backgroundColor: fade(theme.mode.primary.primaryTextColor, 0.6),
    },
    display: "block",
    height: "36px",
    width: "36px",
    position: "absolute",
    right: "10px",
    top: "10px",
    borderRadius: "50%",
    backgroundColor: fade(theme.mode.primary.primaryTextColor, 0.4),
    backgroundImage: `url(${vector})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

export const Preview = React.memo(({
  isDishFullOpened, onClick, preview
}) => {
  const classes = useStyles({isDishFullOpened});
  const previewWidth = isDishFullOpened ? 12 : 4;

  return (
    <Grid
      item
      xs={previewWidth}
      className={classes.transition}
    >
      <div className={cn(classes.previewWrapper, classes.relative)}>
        <div
          className={cn({
            [classes.skipButton]: true,
            [classes.rotate]: isDishFullOpened,
          })}
          onClick={
            isDishFullOpened
              ? onClick()
              : noop
          }
        />
        <img
          className={cn(classes.preview, {
            [classes.openedPreview]: isDishFullOpened,
          })}
          src={preview}
          alt="dish-preview"
          draggable="false"
        />
      </div>
    </Grid>
  );
});
