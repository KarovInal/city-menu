import React, {useState} from 'react';
import cn from 'classnames';
import { GhostButton } from "../buttons";
import Grid from "@material-ui/core/Grid";
import { logo } from "../../constants/theme";
import ReceiptIcon from '@material-ui/icons/Receipt';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InfoIcon from '@material-ui/icons/Info';
import { getOrderSelector } from "../../modules/order-module/order-selector";
import {Analytics} from "aws-amplify";
import { isQrMenu } from "../../utils/is-qr-menu";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from "@material-ui/core/IconButton";
import { ContactsModule } from "../../modules/contacts-module";

const useStyles = makeStyles(theme => ({
  height: {
    height: '60px',
  },
  wrapper: {
    maxWidth: '568px;',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: ({matches}) => ({
    height: '60px',
    padding: matches ? '0' : '0 16px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: theme.mode.primary.primaryBackgroundColor,
    boxShadow: matches ? '0px 2px 4px rgba(0, 0, 0, 0.08)' : '',
    borderBottom: 'solid #E6E6E6 1px'
  }),
  logo: {
    width: 'auto',
    height: '50px',
  }
}));

export const Header = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles({ matches });
  const history = useHistory();
  const orderData = useSelector(getOrderSelector);
  const [isOpenContacts, setIsOpenContacts] = useState(false);

  const params = useParams();

  const { cafe } = params;

  const handleClick = () => {
    Analytics.record({
      name: 'click',
      attributes: {
        'click-page-name': 'INDEX',
        'click-type': 'go_to_order',
      },
    });

    history.push(`/${cafe}/order`);
  }

  return (
    <div className={classes.height}>
      <Grid container direction='row' justify='space-between' alignItems='center' className={cn(classes.root, 'bgWhite')}>
        <div className={classes.wrapper}>
          <img src={logo} alt='logo' className={classes.logo}/>
          <div>
            {
              <IconButton style={{ paddingRight: 0 }} color="secondary" onClick={() => setIsOpenContacts(true)}>
                <InfoIcon style={{ width: '1.25em', height: '1.25em' }} />
              </IconButton>
            }
            {
              (orderData.orderId && orderData.dishes && !isQrMenu) && (
                <GhostButton style={{ marginLeft: '12px' }} onClick={handleClick} startIcon={<ReceiptIcon/>}>
                  ЗАКАЗ
                </GhostButton>
              )
            }
          </div>
        </div>
      </Grid>
      <ContactsModule isOpen={isOpenContacts} onClose={() => setIsOpenContacts(false)} />
    </div>
  );
};
