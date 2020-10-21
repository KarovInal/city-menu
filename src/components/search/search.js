import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { ReactComponent as SearchIcon } from "./assests/search.svg";
import { PaddingWrapper } from "../padding-wrapper";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    height: '40px',
    boxSizing: 'border-box',
    border: `1px solid rgba(0, 0, 0, 0.15);`,
    position: "relative",
    borderRadius: '8px',
    backgroundColor: '#F7F7F7',
    "&:hover": {
      backgroundColor: '#FFFFFF',
      border: `1px solid ${theme.mode.primary.primaryColor}`,
    },
    "&:focus": {
      backgroundColor: '#FFFFFF',
      border: `1px solid ${theme.mode.primary.primaryColor}`,
    },
  },
  searchIcon: {
    height: "100%",
    padding: '0 10px 0 10px',
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputInput: {
    width: "100%",
    height: "100%",
    padding: '0px 0px 0px 40px',
    transition: theme.transitions.create("width"),
  },
  inputRoot: {
    width: "calc(100% - 34px)",
    height: "100%",
  },
  buttonRoot: {
    padding: '6px',
    fontSize: '22px',
  },
}));

export const Search = React.memo(({ onSearch }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const onChange = React.useCallback(({ target: { value }}) => {
    setValue(value);
    onSearch(value);
  }, [onSearch]);

  const clearInput = React.useCallback(() => {
    if (!value) {
      return;
    }

    setValue('');
    onSearch('');
  }, [value, onSearch]);

  return (
    <PaddingWrapper>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Поиск блюда"
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
          onChange={onChange}
          value={value}
        />
        <IconButton classes={{ root: classes.buttonRoot }} onClick={clearInput}>
          <ClearIcon fontSize="inherit" />
        </IconButton>
      </div>
    </PaddingWrapper>
  );
});
