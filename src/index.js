import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/normalize.scss';
import './vendor/fonts.scss';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);
