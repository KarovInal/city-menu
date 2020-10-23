import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = (size, preview) => makeStyles({
  root: {
    height: size === 'sm' ? '80px' : '140px',
    width: size === 'sm' ? '80px' : '140px',
    border: '0.5px solid rgba(0, 0, 0, 0.08)',
    boxSizing: 'border-box',
    borderRadius: '12px',
    flexShrink: 0,
    backgroundImage: `url('${preview}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
});

export const Preview = React.memo(({ preview, size = 'md' }) => {
  const classes = useStyles(size, preview)();

  return (
    <div className={classes.root} />
  );
});
