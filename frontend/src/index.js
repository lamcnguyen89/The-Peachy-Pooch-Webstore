import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';

// Import Bootstrap
// Source: https://stackoverflow.com/questions/50980046/bootstrap-dropdown-not-working-in-react
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root')
);


serviceWorker.unregister();
