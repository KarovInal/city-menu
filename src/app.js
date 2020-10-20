import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createThemeConfig } from './constants/theme';
import { Header } from "./components/header";
import { MenuList } from "./components/menu-list";
import { Provider } from 'react-redux';
import _ from 'lodash/fp';
import { store } from './redux-init';
import { CartPage } from "./pages/cart-page";
import { StickyContainer } from 'react-sticky';
import { Categories } from "./components/categories/categories";
import { OrderPage } from "./pages/order-page";
import { RecommendationsList } from "./components/recommendations-list/recommendations-list";
import { Search } from "./components/search";
import { ProceedButton } from "./components/proceed-button";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'light' : 'dark';
  const customTheme = createMuiTheme(createThemeConfig(mode));
  const { dictionary, recommendations } = store.getState();
  const [dishes, setDishes] = React.useState(dictionary.dishes);

  const onSearch = React.useCallback((inputValue = '') => {
    const filteredDishes = _.pickBy(({
      title = '',
    }) => _.toLower(title).includes(_.toLower(inputValue)))(dishes);

    setDishes(filteredDishes);
  }, [dishes]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header />
              <RecommendationsList recommendations={recommendations} />
              <StickyContainer>
                <Search onSearch={onSearch} />
                <Categories categories={dictionary.dishCategories} />
                <MenuList data={dishes} />
                {/* TODO [NZ] 21.10.2020: Pass correct totalPrice */}
                <ProceedButton totalPrice={0} />
              </StickyContainer>
            </Route>
            <Route exact path='/cart'>
              <CartPage />
            </Route>
            <Route exact path='/order'>
              <OrderPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
