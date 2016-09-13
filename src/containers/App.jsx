import React from 'react';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

/*
  This component is essentially the _layout for the components rendered
  based upon the current component displayed by react-router
*/

// Navigation and _layout of entire SPA
const App = props => {
  const {recipes, dispatch} = props;

  return (
    <div className="ui aligned segment">
      <h1 className="ui header">Recipe Box</h1>

      <div className="ui container">
        <div className="ui large secondary menu">
          <Link to='/' className="active item">Your Recipes</Link>
          <Link to='/create' className="item">Add Recipe</Link>
        </div>
      </div>

    {React.Children.map(
      props.children,
      child => React.cloneElement(child, {recipes, dispatch})
    )}

    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element,
  recipes: React.PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  };
}

const mapPropsToDispatch = (dispatch) => {};

// Connect to redux
export default connect(mapStateToProps)(App);
