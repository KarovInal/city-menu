import React from 'react';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from "@material-ui/core/styles/withStyles";
import { colors } from "../../constants/theme";

export const PrimaryButton = props => <Button color='primary' variant="contained" {...props} />;

export const SecondaryButton = props => <Button color='secondary' variant="contained" {...props} />;

export const GhostButton = props => <Button color='default' variant="outlined" {...props} />;

export const SearchButton = props => <GhostButton startIcon={<SearchIcon />} {...props} />;

export const RadioButton = withStyles({
  root: {
    color: colors.primaryColor,
    '&$checked': {
      color: colors.primaryColor,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
