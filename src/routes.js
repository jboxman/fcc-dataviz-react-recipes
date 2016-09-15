import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Why do these require a suffix now?
import App from './containers/App.jsx';
import RecipePage from './components/recipes/RecipePage.jsx';
import RecipeListPage from './components/recipes/RecipeListPage.jsx';
import ManageRecipePage from './components/recipes/ManageRecipePage.jsx';

const NotFoundPage = () => <div>Not Found</div>;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecipeListPage}/>
    <Route path="/recipe" component={ManageRecipePage}/>
    <Route path="/recipe/:id" component={RecipePage}/>
    <Route path="/recipe/manage/:id" component={ManageRecipePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
