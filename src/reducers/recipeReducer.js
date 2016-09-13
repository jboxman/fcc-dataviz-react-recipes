import objectAssign from 'object-assign';

import * as types from '../constants/actionTypes';
import initialState from './initialState';

/*
  The default state for this reducer is simply [].
  By way of combineReducers(), this reducer is associated only with
  the 'recipes' key. Other reduces and react-router-redux will likewise
  use different keys.
*/

export default function recipeReducer(state = initialState.recipes, action = {}) {
  const {type, payload} = action;

  //console.log(`${type}: ${JSON.stringify(payload)}`);

  switch (type) {
    case types.CREATE_RECIPE:
      return state.concat(payload);

    case types.MODIFY_RECIPE:
      const idx = state.findIndex(item => item.id == payload.id);
      const newRecord = objectAssign({}, state[idx], payload);

      return state.map((oldRecord, i) => {
        return i == idx ? newRecord : oldRecord;
      });

    case types.DELETE_RECIPE:
      return state.filter(record => record.id != payload.id);

    default:
      return state;
  }
}
