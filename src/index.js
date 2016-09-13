/*eslint import/default: "warn"*/

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';

import configureStore from './store/configureStore';

require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/semantic.css';
import './styles/style.scss';

/*
  Import function to handle store hydration from localStorage

  Code for localStorage middleware from this post, item 7.:
  http://blog.krawaller.se/posts/exploring-redux-middleware/
*/

// Move into a mock
let initialData;
if (process.env.NODE_ENV == 'development') {
  initialData = {
    recipes: [
      {
        id:'cadb',
        name: 'a recipe',
        ingredients: 'a, list, of, things',
        instructions: `a series\n\n of steps`
      }
    ]
  };
}

const store = configureStore(initialData);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// Need to add router
render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
