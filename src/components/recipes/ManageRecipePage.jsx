import React, {PropTypes as P} from 'react';
import objectAssign from 'object-assign';

import RecipeForm from './RecipeForm';

class ManageRecipePage extends React.Component {
  constructor(props) {
    super();

    // This only works due to sync nature of recipes
    const data = !!props.params.id ?
      props.recipes.find(recipe => recipe.id == props.params.id) :
      {
        name: '', ingredients: '', description: ''
      };

    this.state = {
      data: data,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  // Never on initial render, may run when props hasn't changed.
  componentWillReceiveProps(nextProps) {
  }

  onSave(ev) {
    ev.preventDefault();

    !!this.props.params.id ?
      this.props.actions.modifyRecipe(this.state.data) :
      this.props.actions.createRecipe(this.state.data);

    // Redirect on success
    this.context.router.push('/');
  }

  onChange(ev) {
    const nextState = {
      [ev.target.name]: ev.target.value
    };
    const data = objectAssign({}, this.state.data, nextState);

    return this.setState({data});
  }

  render() {
    return (
      <RecipeForm
        onChange={this.onChange}
        onSave={this.onSave}
        data={this.state.data}
        errors={this.state.errors}/>
    );
  }
}

ManageRecipePage.contextTypes = {
  router: P.object
};

ManageRecipePage.propTypes = {
  recipes: P.array.isRequired,
  params: P.object.isRequired
};

ManageRecipePage.defaultProps = {
  recipes: [],
  actions: P.object.isRequired
};

export default ManageRecipePage;
