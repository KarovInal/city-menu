import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from "@material-ui/core/Typography";
import { SecondaryButton } from "../buttons";
import { noop } from "../../utils/noop";
import './styles.css';

export const Counter = ({ initCount = 0, onUpdate = noop }) => {
  const [count, setCount] = useState(initCount);

  useEffect(() => onUpdate(count), [count, onUpdate]);

  return (
    <Grid container justify='space-between' className='counterWrap' direction='row'>
      <SecondaryButton className='counterButton' onClick={() => setCount(count + 1)}>
        <AddIcon />
      </SecondaryButton>
      <Grid container justify='center' alignItems='center' className='counterIndex'>
        <Typography>{count}</Typography>
      </Grid>
      <SecondaryButton className='counterButton' onClick={() => count > 0 && setCount(count - 1)}>
        <RemoveIcon />
      </SecondaryButton>
    </Grid>
  );
}
