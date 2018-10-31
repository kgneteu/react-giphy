import React from 'react';
import 'babel-regenerator-runtime';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Router, Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import {
    App,
    Search,
    Trending,
    Random,
} from './src/components/pages';

import rootReducer from './src/reducers';
import searchSaga from './src/sagas/search';
import randomSaga from './src/sagas/random';

const sagas = createSagaMiddleware();
const history = createHistory();

const store = createStore(
    rootReducer,
    applyMiddleware(
        routerMiddleware(history),
        createLogger(),
        sagas,
    )
);
sagas.run(searchSaga);
sagas.run(randomSaga);

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Route exact path="/" component={Search} />
                <Route path="/trending" component={Trending} />
                <Route path="/random" component={Random} />
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
