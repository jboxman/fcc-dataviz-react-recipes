import React, {PropTypes as P} from 'react';

class RecipePage extends React.Component {
  constructor() {
    super();

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(ev) {
    ev.preventDefault();
    this.context.router.push(
      `/recipe/manage/${this.props.params.id}`);
  }

  handleDelete(ev) {
    ev.preventDefault();
    this.props.actions.deleteRecipe({id: this.props.params.id});
    this.context.router.push('/');
  }

  // Not my favorite way to do this, but this is a toy app.
  formatIngredientsList(ingredients) {
    return (
      ingredients.split(',')
        .map((item, idx) => <li key={idx}>{item.trim()}</li>)
    );
  }

  // What is best practice for dealing with possible undefined values?
  render() {
    const recipe = this.props.recipes.find(v => v.id == this.props.params.id);
    if(!recipe) {
      return null;
    }

    const {
      id,
      name,
      ingredients,
      instructions
    } = recipe;

    const editLink = `/recipe/manage/${id}`;
    const deleteLink = `/recipe/delete/${id}`;

    return (
      <div className="ui items">
        <div className="item">
          <div className="aligned content">
            <div className="header">
              {name}
            </div>
            <div className="description">
              <h4>Ingredients</h4>
              <ul>
              {this.formatIngredientsList(ingredients)}
              </ul>
              <h4>Instructions</h4>
                <p>{instructions}</p>
            </div>
            <div className="extra">
              <button
                className="ui right floated red button"
                onClick={this.handleDelete}>Delete</button>
              <button
                className="ui right floated primary button"
                onClick={this.handleEdit}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RecipePage.propTypes = {
  recipes: P.array.isRequired,
  params: P.object.isRequired,
  actions: P.object.isRequired
};
RecipePage.defaultProps = {
  recipes: [],
  actions: {}
};
RecipePage.contextTypes = {
  router: P.object
};

export default RecipePage;
