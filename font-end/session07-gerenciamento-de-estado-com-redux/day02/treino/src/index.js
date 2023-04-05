import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import globalStore from './redux/globalStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={globalStore}>
    <App />
  </Provider>
);
