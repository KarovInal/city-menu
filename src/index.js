import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./redux-init";
import awsconfig from './aws-exports';
import { Provider } from "react-redux";
import Amplify, { Analytics } from 'aws-amplify';
import './index.css';

Amplify.configure(awsconfig);

Analytics.autoTrack('session', {
  enable: true,
  provider: 'AWSPinpoint'
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
