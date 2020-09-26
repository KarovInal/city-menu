import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    height: '140px',
    weight: '140px',
    border: '0.5px solid rgba(0, 0, 0, 0.08)',
    boxSizing: 'border-box',
    borderRadius: '12px',
  },
});

export const Preview = React.memo(({ preview }) => {
  const classes = useStyles();

  return (
    <img className={classes.root} src={preview} alt="position-preview" draggable="false" />
  );
});
