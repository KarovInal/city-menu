import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.less';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <h1>Molvee - qr menu for restaurants</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
