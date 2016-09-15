import React, {PropTypes} from 'react';

import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';

// Copied from Cory House's react-redux PluralSight course and modified for
// use with Semantic UI classNames.
// https://app.pluralsight.com/player?course=react-redux-react-router-es6

// other data as relevant, particularly the record itself as {data}
const RecipeForm = ({data, onSave, onChange, loading, errors}) => {
  return (
    <div className="ui form">
    <form>
      <TextInput
        name="name"
        label="Name"
        onChange={onChange}
        value={data.name}
        error={errors.name}/>

      <TextInput
        name="ingredients"
        label="Ingredients"
        onChange={onChange}
        value={data.ingredients}
        error={errors.ingredients}>
        <div className="ui pointing label">
          Please use a comma to separate each ingredent: 2 eggs, 1 cup milk, ect.
        </div>
      </TextInput>

      <TextArea
        name="instructions"
        label="Instructions"
        onChange={onChange}
        value={data.instructions}
        error={errors.instructions}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        onClick={onSave}/>
    </form>
    </div>
  );
};

RecipeForm.propTypes = {
  data: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default RecipeForm;
