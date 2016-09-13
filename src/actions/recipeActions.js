import cuid from 'cuid';

import * as types from '../constants/actionTypes';

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
