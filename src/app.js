import React from 'react';
import _ from 'lodash/fp';
import { store } from './redux-init';
import { Provider } from 'react-redux';
import { Header } from "./components/header";
import { CartPage } from "./pages/cart-page";
import { Search } from "./components/search";
import { StickyContainer } from 'react-sticky';
import { OrderPage } from "./pages/order-page";
import { MenuList } from "./components/menu-list";
import { StoriesPage } from "./pages/stories-page";
import { createThemeConfig } from './constants/theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { PageView } from "./components/page-view/page-view";
import { ProceedButton } from "./components/proceed-button";
import { Categories } from "./components/categories/categories";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecommendationsList } from "./components/recommendations-list/recommendations-list";
import "animate.css";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'light' : 'dark';
  const customTheme = createMuiTheme(createThemeConfig(mode));
  const { dictionary, recommendations } = store.getState();
  const [dishes, setDishes] = React.useState(dictionary.dishes);

  const onSearch = React.useCallback((inputValue) => {
    if (!inputValue) {
      setDishes(dictionary.dishes);

      return;
    }

    const filteredDishes = _.pickBy(({
      title = '',
    }) => _.toLower(title).includes(_.toLower(inputValue)))(dictionary.dishes);

    setDishes(filteredDishes);
  }, [dictionary.dishes]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Switch>
            <Route exact path='/cart'>
              <PageView pageName='CART'>
                <CartPage />
              </PageView>
            </Route>
            <Route exact path='/order'>
              <PageView pageName='ORDER'>
                <OrderPage />
              </PageView>
            </Route>
            <Route exact path={['/stories/:activeSlide', '/stories']}>
              <PageView pageName='STORIES'>
                <StoriesPage />
              </PageView>
            </Route>
            <Route exact path={['/', '/:anchor']}>
              <PageView pageName='INDEX'>
                <Header />
                <RecommendationsList recommendations={recommendations} />
                <StickyContainer>
                  <Search onSearch={onSearch} />
                  <Categories categories={dictionary.dishCategories} />
                  <MenuList data={dishes} />
                  <ProceedButton onSearch={onSearch} />
                </StickyContainer>
              </PageView>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
