import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const elm = document.getElementById('root');

const root = ReactDOM.createRoot(elm);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);