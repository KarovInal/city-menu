import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { getContactsSelector } from "../dictionary-module";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {withStyles} from "@material-ui/core";
import {Body1} from "../../components/typography/body1";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({
  root: {
    margin: 0,
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  contactItem: {
    marginBottom: '10px'
  },
  socialNetworkLink: {
    margin: '5px 5px'
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export const ContactsModule = ({ isOpen = false, onClose }) => {
  const contacts = useSelector(getContactsSelector);
  const classes = makeStyles(styles)();

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" onClose={onClose}>
        О нас
      </DialogTitle>
      <DialogContent>
        <Grid className={classes.contactItem} container direction='column' alignItems='center'>
          <Body1>Наши контакты:</Body1>
          <Grid container justify='center'>
            { contacts.instagram && <Link className={classes.socialNetworkLink} target='_blank' href={contacts.instagram}><InstagramIcon fontSize="large" /></Link> }
            { contacts.whatsapp && <Link className={classes.socialNetworkLink} target='_blank' href={contacts.whatsapp}><WhatsAppIcon fontSize="large" /></Link> }
            { contacts.email && <Link className={classes.socialNetworkLink} target='_blank' href={contacts.email}><AlternateEmailIcon fontSize="large" /></Link> }
          </Grid>
        </Grid>
        <Grid className={classes.contactItem} container direction='column' alignItems='center'>
          <Body1>Телефон:</Body1>
          <Grid container justify='center'>
            <Link href={`tel:${contacts.phone}`}>{ contacts.phone }</Link>
          </Grid>
        </Grid>
        <Grid className={classes.contactItem} container direction='column' alignItems='center'>
          <Body1>Адрес:</Body1>
          <Grid container justify='center'>
            <Link align='center' underline='always' href={contacts.mapLink} target='_blank'>{ contacts.addressName }</Link>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid className={classes.contactItem} container direction='column' alignItems='center'>
          <Body1>{contacts.description.split('\n').map((item, key) => {
            return <Fragment key={key}>{item}<br/></Fragment>
          })}</Body1>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
