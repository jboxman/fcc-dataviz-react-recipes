import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Why do these require a suffix now?
import App from './containers/App.jsx';
import List from './components/List.jsx';
import Edit from './components/Edit.jsx';
import New from './components/New.jsx';
import View from './components/View.jsx';

/*
  / - List
  /view/{id} - View
  /edit/{id} - Edit
  /new - New (id will be undefined)
*/

const NotFoundPage = () => <div>Not Found</div>;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List}/>
    <Route path="/create" component={New}/>
    <Route path="/edit/:id" component={Edit}/>
    <Route path="/view/:id" component={View}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
