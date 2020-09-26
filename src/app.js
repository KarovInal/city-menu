import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createThemeConfig } from './constants/theme';
import { Header } from "./components/header";
import { MenuList } from "./components/menu-list";
import { mockData } from "./mock-data";
import { StickyContainer } from 'react-sticky';
import { Categories } from "./components/categories/categories";

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
            <StickyContainer>
              <Categories categories={mockData.dictionary.dishCategories} />
              <MenuList data={mockData.menuList} />
            </StickyContainer>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
