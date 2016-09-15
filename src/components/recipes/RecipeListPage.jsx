import React, {PropTypes as P} from 'react';

import ListItem from '../ListItem';

const itemWithKey = ({id, name}) => {
  return <ListItem key={id} id={id} name={name}/>
}

const RecipeListPage = ({recipes}) => {
  return (
    <div className="ui compact segment">
      <div className="ui relaxed divided list">
        {recipes.map(itemWithKey)}
      </div>
    </div>
  );
};

RecipeListPage.propTypes = {
  recipes: P.array.isRequired
};
// https://github.com/facebook/react/issues/6653
RecipeListPage.defaultProps = {
  recipes: []
}
export default RecipeListPage;
