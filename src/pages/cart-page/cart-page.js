import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import { ArrowBack } from "@material-ui/icons";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import { Body1 } from "../../components/typography/body1";
import { Title } from "../../components/typography/title";
import Grid from "@material-ui/core/Grid";
import {PrimaryButton} from "../../components/buttons";

const useStyles = makeStyles((theme) => ({
  header: {
    height: '60px',
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)"
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: 'center'
  },
  removeText: {
    lineHeight: '32px',
    color: theme.mode.primary.primaryColor
  },
  footerAppBar: {
    top: 'auto',
    bottom: 0,
  },
  footerToolBar: {
    height: '60px',
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
    borderTop: "solid #E6E6E6 1px"
  },
  discountPrice: {
    textDecoration: 'line-through',
    color: theme.mode.primary.disabledTextColor,
  },
  confirmOrderButton: {
    height: '48px'
  },
}));

export const CartPage = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense" className={classes.header}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ArrowBack />
          </IconButton>
          <Title className={classes.headerTitle}>Корзина</Title>
          <Body1 className={classes.removeText}>Удалить</Body1>
        </Toolbar>
      </AppBar>

      <AppBar position="fixed" className={classes.footerAppBar}>
        <Toolbar variant="dense" className={classes.footerToolBar}>
          <Grid container direction='row' justify='space-between'>
            <Grid container direction='column' style={{ width: 'auto' }}>
              <Body1 className={classes.discountPrice}>807 ₽</Body1>
              <Title>766 ₽</Title>
            </Grid>
            <Grid container direction='column' justify='center' style={{ width: 'auto' }}>
              <PrimaryButton className={classes.confirmOrderButton}>Подтвердить заказ</PrimaryButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}