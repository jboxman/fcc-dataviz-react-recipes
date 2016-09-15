import React, {PropTypes} from 'react';

const TextArea = ({name, label, onChange, value, error}) => {
  return (
    <div className="field">
    <label htmlFor={name}>{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}/>
    {error && <div>{error}</div>}
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextArea;
