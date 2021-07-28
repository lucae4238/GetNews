import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store'
import ThemedApp from './Components/Theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemedApp />
  </Provider>,
  document.getElementById("root")
);
