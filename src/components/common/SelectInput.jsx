import React, {PropTypes} from 'react';

// Copied from Cory House's react-redux PluralSight course and modified for
// use with Semantic UI classNames.
// https://app.pluralsight.com/player?course=react-redux-react-router-es6

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <label htmlFor={name}>{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}>
    {options.map(option => {
      return <option key={option.value} value={option.value}>{option.text}</option>;
    })}
    </select>
    {error && <div>{error}</div>}
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
