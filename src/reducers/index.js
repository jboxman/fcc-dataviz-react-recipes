import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import recipes from './recipeReducer';

const rootReducer = combineReducers({
  recipes,
  routing
});

export default rootReducer;
