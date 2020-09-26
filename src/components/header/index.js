import React from 'react';
import { GhostButton } from "../buttons";
import Grid from "@material-ui/core/Grid";
import { logo } from "../../constants/theme";
import ReceiptIcon from '@material-ui/icons/Receipt';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  wrap: {
    height: '60px',
  },
  root: {
    height: '60px',
    padding: '0 16px',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
  },
  logo: {
    width: 'auto',
    height: '32px',
  },
}));

export const Header = ({ withOrder = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <Grid container direction='row' justify='space-between' alignItems='center' className={classes.root}>
        <img src={logo} alt='logo' className={classes.logo} />
        {
          withOrder && <GhostButton startIcon={<ReceiptIcon />}>ЗАКАЗ</GhostButton>
        }
      </Grid>
    </div>
  );
};
