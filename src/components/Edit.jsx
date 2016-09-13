import React, {PropTypes as P} from 'react';

import Form from './Form';

const Edit = ({recipes, params, dispatch}) => {
  const record = recipes.find(recipe => recipe.id == params.id);
  return (
    <div className="ui compact segment">
      <Form mode="edit" record={record} dispatch={dispatch}/>
    </div>
  );
};

Edit.propTypes = {
  recipes: P.array.isRequired
};
Edit.defaultProps = {
  recipes: []
};

export default Edit;
