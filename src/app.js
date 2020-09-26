import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createThemeConfig } from './constants/theme';
import { Header } from "./components/header";
import { MenuList, mockData } from "./components/menu-list";
import { ECategories } from "./enums";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'light' : 'dark';
  const customTheme = createMuiTheme(createThemeConfig(mode));

  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header withOrder />
            <Typography color='textSecondary'>Molvee - qr menu for restaurants</Typography>
            {/*TODO [NZ] 24.09.2020: Remove temp link later*/}
            <a href={`#${ECategories.Soup}`}>soup link</a>
            <br/>
            <a href={`#${ECategories.Sushi}`}>sushi link</a>
            <MenuList data={mockData} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
