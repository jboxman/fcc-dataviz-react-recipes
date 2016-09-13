import pipe from 'lodash/fp/flow';
import objectAssign from 'object-assign';
import {assert} from 'chai';

import * as Actions from '../actions/recipeActions';
import reducer from './recipeReducer';

// Testing approach derived from
// https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44

// A recipe factory
const createRecipe = ({
  id = 0,
  name = '',
  ingredients = '',
  instructions = ''
} = {}) => ({
  id, name, ingredients, instructions
});

// Array wrapper
const createState = (...args) => (args);

describe('recipeReducer()', () => {

  it('without arguments', () => {
    const msg = 'should return default state';
    assert.deepEqual(reducer(), createState(), msg);
  });

  it('type CREATE_RECIPE', () => {
    const msg = 'should add a recipe';
    const expected = createState(
      objectAssign({}, createRecipe(), {id: true})
    );

    const actual = pipe(
      () => reducer(undefined, Actions.createRecipe()),
      state => {
        const recipe = state[0];
        recipe.id = !!recipe.id;
        return state;
      }
    )();

    assert.deepEqual(actual, expected, msg);
  });

  // Need one for multiple records
  // Should preserve order
  it('type MODIFY_RECIPE', () => {
    const msg = 'should modify an existing recipe';
    const state = createState(
      objectAssign({}, createRecipe({name: 'my recipe'}))
    );
    const expected = createRecipe({name: 'your recipe'});

    const actual = reducer(
      state,
      Actions.modifyRecipe({name: expected.name})
    );

    assert.deepEqual(actual[0], expected, msg);
  });

});
