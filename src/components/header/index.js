import React from 'react';
import { GhostButton } from "../buttons";
import Grid from "@material-ui/core/Grid";
import { logo } from "../../constants/theme";
import ReceiptIcon from '@material-ui/icons/Receipt';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getOrderSelector } from "../../modules/order-module/order-selector";

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
    zIndex: 999,
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
  },
  logo: {
    width: 'auto',
    height: '32px',
  },
}));

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const orderData = useSelector(getOrderSelector);

  return (
    <div className={classes.wrap}>
      <Grid container direction='row' justify='space-between' alignItems='center' className={classes.root}>
        <img src={logo} alt='logo' className={classes.logo} />
        {
          (orderData.orderId && orderData.dishes) && (
            <GhostButton startIcon={<ReceiptIcon />} onClick={() => history.push('/order')}>
              ЗАКАЗ
            </GhostButton>
          )
        }
      </Grid>
    </div>
  );
};
