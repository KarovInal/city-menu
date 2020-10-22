import React from 'react';
import { store } from './redux-init';
import { Provider } from 'react-redux';
import { Header } from "./components/header";
import { CartPage } from "./pages/cart-page";
import { OrderPage } from "./pages/order-page";
import { StickyContainer } from 'react-sticky';
import { MenuList } from "./components/menu-list";
import { StoriesPage } from "./pages/stories-page";
import { createThemeConfig } from './constants/theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Categories } from "./components/categories/categories";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecommendationsList } from "./components/recommendations-list/recommendations-list";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'light' : 'dark';
  const customTheme = createMuiTheme(createThemeConfig(mode));
  const { dictionary, recommendations } = store.getState();

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Switch>
            <Route exact path='/cart'>
              <CartPage />
            </Route>
            <Route exact path='/order'>
              <OrderPage />
            </Route>
            <Route exact path={['/stories/:activeSlide', '/stories']}>
              <StoriesPage />
            </Route>
            <Route exact path={['/', '/:anchor']}>
              <Header />
              <RecommendationsList recommendations={recommendations} />
              <StickyContainer>
                <Categories categories={dictionary.dishCategories} />
                <MenuList data={dictionary.dishes} />
              </StickyContainer>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
