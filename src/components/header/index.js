import React from 'react';
import { logo } from "../../constants/theme";
import { GhostButton } from "../buttons";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ReceiptIcon from '@material-ui/icons/Receipt';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 'auto',
    height: '32px',
  },
});

export const Header = ({ withOrder = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <img src={logo} className={classes.logo} />
          {
            withOrder && <GhostButton startIcon={<ReceiptIcon />}>ЗАКАЗ</GhostButton>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};
