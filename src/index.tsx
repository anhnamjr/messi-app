import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import RouteApp from 'routes';

ReactDOM.render(
  <Provider store={store}>
    <RouteApp />
  </Provider>,
  document.getElementById('root')
);
