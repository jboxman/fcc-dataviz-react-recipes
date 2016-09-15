import React, {PropTypes} from 'react';

// Copied from Cory House's react-redux PluralSight course and modified for
// use with Semantic UI classNames.
// https://app.pluralsight.com/player?course=react-redux-react-router-es6

const TextInput = ({name, label, onChange, value, error, children}) => {
  return (
    <div className="field">
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}/>
    {children}
    {error && <div>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
