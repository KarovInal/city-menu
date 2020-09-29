import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createThemeConfig } from './constants/theme';
import { Header } from "./components/header";
import { MenuList } from "./components/menu-list";
import { Provider } from 'react-redux';
import { store } from './redux-init';
import { CartPage } from "./pages/cart-page";
import { StickyContainer } from 'react-sticky';
import { Categories } from "./components/categories/categories";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'light' : 'dark';
  const customTheme = createMuiTheme(createThemeConfig(mode));
  const { dictionary } = store.getState();

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header withOrder />
              <Typography color='textSecondary'>Molvee - qr menu for restaurants</Typography>
              <StickyContainer>
                <Categories categories={dictionary.dishCategories} />
                <MenuList data={dictionary.dishes} />
              </StickyContainer>
            </Route>
            <Route exact path='/cart'>
              <CartPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
