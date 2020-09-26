import React from 'react';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { colors } from "../../constants/theme";
import withStyles from "@material-ui/core/styles/withStyles";

export const PrimaryButton = props => <Button color='primary' variant="contained" {...props} />;

export const SecondaryButton = props => <Button color='secondary' variant="contained" {...props} />;

export const GhostButton = props => <Button color='default' variant="outlined" {...props} />;

export const SearchButton = props => <GhostButton startIcon={<SearchIcon />} {...props} />;

export const CircleButton = withStyles({
  root: {
    boxShadow: 'none',
    borderRadius: '20px',
  }
})((props) => <Button {...props} />);

export const RadioButton = withStyles({
  root: {
    color: colors.primaryColor,
    '&$checked': {
      color: colors.primaryColor,
    },
  }
})((props) => <Radio color="default" {...props} />);
