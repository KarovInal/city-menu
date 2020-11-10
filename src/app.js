import React from 'react';
import _ from 'lodash/fp';
import { useSelector } from 'react-redux';
import { Header } from "./components/header";
import { CartPage } from "./pages/cart-page";
import { Search } from "./components/search";
import { StickyContainer } from 'react-sticky';
import { OrderPage } from "./pages/order-page";
import { MenuList } from "./components/menu-list";
import { StoriesPage } from "./pages/stories-page";
import { createThemeConfig } from './constants/theme';
import { OrderFormPage } from "./pages/order-form-page";
import { PageView } from "./components/page-view/page-view";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ProceedButton } from "./components/proceed-button";
import { Categories } from "./components/categories/categories";
import { dictionarySelector } from "./modules/dictionary-module";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecommendationsList } from "./components/recommendations-list/recommendations-list";
import { getRecommendationsSelector } from "./modules/recommendations-module/recommendations-selector";
import "animate.css";
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  boxShadow: {
    boxShadow: '0px 2px 18px rgb(189 189 189)',
  },
});

function App() {
  const styles = useStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'light' : 'dark';
  const customTheme = createMuiTheme(createThemeConfig(mode));
  const dictionary = useSelector(dictionarySelector);
  const recommendations = useSelector(getRecommendationsSelector);
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
    <ThemeProvider theme={customTheme}>
      <Router>
        <PageView>
          <Switch>
            <Route exact path='/cart'>
              <CartPage />
            </Route>
            <Route exact path='/order'>
              <OrderPage />
            </Route>
            <Route exact path='/order-form'>
              <OrderFormPage />
            </Route>
            <Route exact path={['/stories/:activeSlide', '/stories']}>
              <StoriesPage />
            </Route>
            <Route exact path={['/', '/:anchor']}>
              <Header />
              <div className={styles.boxShadow}>
                <RecommendationsList recommendations={recommendations} />
                <StickyContainer className={'bgWhite'}>
                  <Search onSearch={onSearch} />
                  <Categories categories={dictionary.dishCategories} />
                  <MenuList data={dishes} />
                  <ProceedButton onSearch={onSearch} />
                </StickyContainer>
              </div>
            </Route>
          </Switch>
        </PageView>
      </Router>
    </ThemeProvider>
  );
}

export default App;
