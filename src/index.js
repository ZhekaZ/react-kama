import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import App from './App';
import './index.scss';

import {Provider} from './StoreContext';


const renderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
