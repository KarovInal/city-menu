import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from "@material-ui/core/Typography";
import { SecondaryButton } from "../buttons";
import { noop } from "../../utils/noop";
import './styles.css';

export const Counter = ({ count = 0, onUpdate = noop, ...otherProps }) => {
  return (
    <Grid {...otherProps} container justify='space-between' className='counterWrap' direction='row'>
      <SecondaryButton className='counterButton' onClick={() => onUpdate(count + 1)}>
        <AddIcon />
      </SecondaryButton>
      <Grid container justify='center' alignItems='center' className='counterIndex'>
        <Typography>{count}</Typography>
      </Grid>
      <SecondaryButton className='counterButton' onClick={() => count > 0 && onUpdate(count - 1)}>
        <RemoveIcon />
      </SecondaryButton>
    </Grid>
  );
}
