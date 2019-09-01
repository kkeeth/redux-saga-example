import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import { rootStore } from './store';

const store = rootStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
