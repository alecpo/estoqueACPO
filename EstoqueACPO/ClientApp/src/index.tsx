import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

import Layout from './components/Layout';
import store from './store';

axios.defaults.baseURL = 'https://localhost:44309/api';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
