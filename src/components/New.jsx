import React, {PropTypes as P} from 'react';

import Form from './Form';

const New = ({dispatch}) => {
  return (
    <div className="ui compact segment">
      <Form mode="create" dispatch={dispatch}/>
    </div>
  );
};

export default New;
