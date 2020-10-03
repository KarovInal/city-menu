import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = size => makeStyles({
  root: {
    height: size === 'sm' ? '80px' : '140px',
    weight: size === 'sm' ? '80px' : '140px',
    border: '0.5px solid rgba(0, 0, 0, 0.08)',
    boxSizing: 'border-box',
    borderRadius: '12px',
  },
});

export const Preview = React.memo(({ preview, size = 'md' }) => {
  const classes = useStyles(size)();

  return (
    <img className={classes.root} src={preview} alt="position-preview" draggable="false" />
  );
});
