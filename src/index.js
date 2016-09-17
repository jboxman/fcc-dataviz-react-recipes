/*eslint import/default: "warn"*/

// TODO
// - Add prefix path for production environment & set it to '/web/'
// So PREFIX+path for react-router

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createHistory} from 'history';
import {Router, useRouterHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import routes from './routes';
import configureStore from './store/configureStore';

import {loadRecipes} from './actions/recipeActions';

require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/semantic.css';
import './styles/style.scss';

const store = configureStore();
store.dispatch(loadRecipes());

// https://github.com/ReactTraining/react-router/issues/353#issuecomment-181786502
const browserHistory = useRouterHistory(createHistory)({
  basename: process.env.NODE_ENV == 'development' ? '' : '/fcc-dataviz-react-recipes/app'
});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// Need to add router
render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
