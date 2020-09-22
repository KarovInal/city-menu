import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { themeConfig } from './constants/theme';
import { Header } from "./components/header";

const customTheme = createMuiTheme(themeConfig);

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header withOrder />
            <Typography color='textSecondary'>Molvee - qr menu for restaurants</Typography>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
