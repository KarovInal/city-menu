import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { Header } from "../../components/header";
import { RecommendationsList } from "../../components/recommendations-list/recommendations-list";
import { StickyContainer } from "react-sticky";
import { Search } from "../../components/search";
import { Categories } from "../../components/categories/categories";
import { MenuList } from "../../components/menu-list";
import { ProceedButton } from "../../components/proceed-button";
import { getRecommendationsSelector } from "../../modules/recommendations-module/recommendations-selector";
import { dictionarySelector } from "../../modules/dictionary-module";
import _ from "lodash/fp";

const useStyles = makeStyles({
  boxShadow: {
    boxShadow: '0px 2px 18px rgb(189 189 189)',
  },
});

export const DishPage = () => {
  const styles = useStyles();
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
    <>
      <Header />
      <Toolbar />
      <div className={styles.boxShadow}>
        <RecommendationsList recommendations={recommendations} />
          <StickyContainer className={'bgWhite'}>
          <Search onSearch={onSearch} />
          <Categories categories={dictionary.dishCategories} />
          <MenuList data={dishes} />
          <ProceedButton onSearch={onSearch} />
        </StickyContainer>
      </div>
    </>
  );
}
