import React, {PropTypes as P} from 'react';

import ListItem from './ListItem';

const itemWithKey = ({id, name}) => {
  //const {id, ...other} = recipe;
  return <ListItem key={id} id={id} name={name}/>
}

const List = props => {
  const {recipes} = props;
  return (
    <div className="ui compact segment">
      <div className="ui relaxed divided list">
        {recipes.map(itemWithKey)}
      </div>
    </div>
  );
};

List.propTypes = {
  recipes: P.array.isRequired
};
// https://github.com/facebook/react/issues/6653
List.defaultProps = {
  recipes: []
}

export default List;
