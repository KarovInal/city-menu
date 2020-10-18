import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { ReactComponent as SearchIcon } from "./assests/search.svg";
import { PaddingWrapper } from "../padding-wrapper";

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
    width: "100%",
    height: "100%",
  }
}));

export const Search = React.memo(() => {
  const classes = useStyles();

  return (
    <PaddingWrapper>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Поиск блюда"
          classes={{ input: classes.inputInput, root: classes.inputRoot }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </PaddingWrapper>
  );
});
