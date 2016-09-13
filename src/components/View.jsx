import React, {PropTypes as P} from 'react';
import {Link} from 'react-router';

// Not my favorite way to do this, but this is a toy app.
const ingredientList = (ingredients) => {
  return (
    <ul>
    {ingredients.split(',').map((item, idx) => <li key={idx}>{item.trim()}</li>)}
    </ul>
  );
};

const instructionText = (instructions) => {
  return (
    <p>{instructions}</p>
  );
};

const View = ({recipes, params}) => {
  const {
    id,
    name,
    ingredients,
    instructions
  } = recipes.find(v => v.id == params.id);

  const editLink = `/edit/${id}`;

  return (
    <div className="ui items">
      <div className="item">
        <div className="aligned content">
          <div className="header">
            {name}
          </div>
          <div className="description">
            <h4>Ingredients</h4>
            {ingredientList(ingredients)}
            <h4>Instructions</h4>
            {instructionText(instructions)}
          </div>
          <div className="extra">
            <div className="ui right floated button">
              <Link to={editLink}>Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

View.propTypes = {
  recipes: P.array.isRequired,
  params: P.object.isRequired
};
View.defaultProps = {
  recipes: []
};

export default View;
