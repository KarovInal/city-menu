import React from 'react';
import cn from "classnames";
import { noop } from "lodash";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { fade } from "@material-ui/core";
import vector from "./assets/Vector.png";

const useStyles = makeStyles((theme) => ({
  preview: ({ isDishFullOpened }) => ({
    maxWidth: isDishFullOpened ? '' : "140px",
    maxHeight: isDishFullOpened ? "180px" : "140px",
    border: "0.5px solid rgba(0, 0, 0, 0.08)",
    boxSizing: "border-box",
    borderRadius: "12px",
    objectFit: "cover",
    width: "100%",
  }),
  openedPreview: {
    height: "180px",
  },
  transition: {
    transition: "max-width .2s ease-in-out, flex-basis .2s ease-in-out",
  },
  relative: {
    position: "relative",
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
    transform: "rotate(180deg)",
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
      <div className={cn(classes.relative)}>
        <div
          className={cn({
            [classes.skipButton]: isDishFullOpened,
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
