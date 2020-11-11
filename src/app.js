import React from 'react';
import { CartPage } from "./pages/cart-page";
import { OrderPage } from "./pages/order-page";
import { StoriesPage } from "./pages/stories-page";
import { createThemeConfig } from './constants/theme';
import { OrderFormPage } from "./pages/order-form-page";
import { PageView } from "./components/page-view/page-view";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "animate.css";
import { DishPage } from "./pages/dish-page";
import { keksFamilyDomainPrefix } from "./db/keks-family";

const domainPrefixs = [
  keksFamilyDomainPrefix,
].join('|');

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'light' : 'dark';
  const customTheme = createMuiTheme(createThemeConfig(mode));

  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <PageView>
          <Switch>
            <Route exact path={`/:cafe(${domainPrefixs})/cart`} component={CartPage} />
            <Route exact path={`/:cafe(${domainPrefixs})/order`} component={OrderPage} />
            <Route exact path={`/:cafe(${domainPrefixs})/order-form`} component={OrderFormPage} />
            <Route exact path={`/:cafe(${domainPrefixs})/stories/:activeSlide?`} component={StoriesPage} />
            <Route exact path={`/:cafe(${domainPrefixs})/:anchor?`} component={DishPage} />
          </Switch>
        </PageView>
      </Router>
    </ThemeProvider>
  );
}

export default App;
