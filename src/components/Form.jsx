import React, {PropTypes as P} from 'react';
import objectAssign from 'object-assign';

import {createRecipe, modifyRecipe} from '../actions/recipeActions';

import FormInput from './FormInput';

class Form extends React.Component {
  constructor(props) {
    super();

    // Ideally there is a global schema. DRY.
    if(props.mode == 'edit') {
      this.state = objectAssign({}, props.record);
    }
    else if(props.mode == 'create') {
      this.state = objectAssign({}, {
        name: '',
        ingredients: '',
        instructions: ''
      });
      /*
      this.state = objectAssign(
        {},
        Object.keys(modifyRecipe().payload)
      );
      */
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    // Which?
    ev.preventDefault();
    ev.stopPropagation();

    switch(this.props.mode) {
      case 'edit':
        this.props.dispatch(modifyRecipe(this.state));
        break;
      case 'create':
        this.props.dispatch(createRecipe(this.state));
        break;
    }
  }

  onChangeHandler(ev) {
    const nextState = {};
    nextState[ev.target.name] = ev.target.value;
    this.setState(objectAssign({}, this.state, nextState));
  }

  render() {
    const fieldProps = {
      record: this.state,
      onChange: this.onChangeHandler
    };

    return (
    <div className="ui form">
      <form onSubmit={this.onSubmit}>
      <FormInput name="name" {...fieldProps}/>
      <FormInput name="ingredients" {...fieldProps}>
        <div className="ui pointing label">
          Please use a comma to separate each ingredent: 2 eggs, 1 cup milk, ect.
        </div>
      </FormInput>
      <FormInput type="textarea" name="instructions" {...fieldProps}/>
      <input type="submit" value="Save"/>
      </form>
    </div>
    );
  }
}

Form.propTypes = {
  mode: P.oneOf(['create', 'edit']).isRequired,
  record: P.object.isRequired,
  dispatch: P.func.isRequired
};

Form.defaultProps = {
  mode: 'create',
  record: {}
};

export default Form;
