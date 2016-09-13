import React, {PropTypes as p} from 'react';
import {Link} from 'react-router';

const ListItem = props => {
  const {id, name} = props;
  const link = `/view/${id}`;

  return (
    <div key={id} className="item">
      <div className="content">
        <Link to={link} className="header">{name}</Link>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  id: p.string.isRequired,
  name: p.string.isRequired
};

export default ListItem;
