import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "./Store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider
        store={store}
    >
        <App />
    </Provider>

);