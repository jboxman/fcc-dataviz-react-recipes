import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

import * as recipeActions from '../actions/recipeActions';

/*
  This component is essentially the _layout for the components rendered
  based upon the current component displayed by react-router
*/

// Navigation and _layout of entire SPA
const App = ({children, recipes, actions}) => {

  return (
    <div className="ui aligned segment">
      <h1 className="ui header">Recipe Box</h1>

      <div className="ui container">
        <div className="ui large secondary menu">
          <Link to='/' className="active item">Your Recipes</Link>
          <Link to='/recipe' className="item">Add Recipe</Link>
        </div>
      </div>

    {React.Children.map(
      children,
      child => React.cloneElement(child, {recipes, actions})
    )}

    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element,
  recipes: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  };
}

const mapPropsToDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  }
};

// Connect to redux
export default connect(mapStateToProps, mapPropsToDispatch)(App);
