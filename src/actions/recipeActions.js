import localForage from 'localforage';
import cuid from 'cuid';

import * as types from '../constants/actionTypes';

// actionCreators

export const createRecipe = ({
  id = cuid(),
  name = '',
  ingredients = '',
  instructions = ''
} = {}) => ({
  type: types.CREATE_RECIPE,
  payload: {
    id,
    name,
    ingredients,
    instructions
  }
});

export const modifyRecipe = ({
  id = 0,
  name = '',
  ingredients = '',
  instructions = ''
} = {}) => ({
  type: types.MODIFY_RECIPE,
  payload: {
    id,
    name,
    ingredients,
    instructions
  }
});

export const deleteRecipe = ({
  id
} = {}) => ({
  type: types.DELETE_RECIPE,
  payload: {id}
});

export function loadRecipesSuccess(recipes = []) {
  return {
    type: types.LOAD_RECIPES_SUCCESS,
    payload: recipes
  };
}

// action thunks

export function loadRecipes() {
  return function(dispatch) {

    // Can add loading spinner here

    localForage.getItem('RECIPES')
      .then(recipes => {
        // localForage will return null for undefined keys
        const data = !recipes ? [] : recipes;
        dispatch(loadRecipesSuccess(data));
      });
  };
}
