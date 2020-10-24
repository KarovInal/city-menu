import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
import App from './app';
import './index.css';

Amplify.configure(awsconfig);

Analytics.autoTrack('session', {
  enable: true,
  provider: 'AWSPinpoint'
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
