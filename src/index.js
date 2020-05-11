import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        , document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
