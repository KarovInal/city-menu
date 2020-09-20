import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RadioButton } from './components/buttons';
import { theme } from './constants/theme';
import { Counter } from "./components/counter";

const customTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px',
      },
    },
  },
  palette: {
    primary: {
      main: theme.primaryColor
    },
    secondary: {
      main: theme.secondaryColor
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Typography color='textSecondary'>Molvee - qr menu for restaurants</Typography>
            <Counter />
            <RadioButton />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
