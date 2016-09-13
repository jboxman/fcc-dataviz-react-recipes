import React from 'react';

// Rebase to another file
function WrapInputWithValue(WrappedComponent) {
  return class extends React.Component {
    render() {
      const value = this.props.record[this.props.name];
      return <WrappedComponent {...this.props} value={value}/>
    }
  }
}

// TODO
// - Should refactor out everything but <input> and <label>
// - Use for= for label by giving each input an ID
let FormInput = (props) => {
  const {name, type, value, onChange} = props;
  const fieldProps = {name, value, onChange};

  switch(type) {
    case 'text':
      return (
        <div className="field">
          <label>{name}</label>
          <input type="text" {...fieldProps}/>
          {props.children}
        </div>
      );

    case 'textarea':
    return (
      <div className="field">
        <label>{name}</label>
        <textarea {...fieldProps}/>
        {props.children}
      </div>
    );

    default:
      return <div>{name}</div>
  }

};
FormInput = WrapInputWithValue(FormInput);

FormInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['textarea', 'text']).isRequired
};
FormInput.defaultProps = {
  type: 'text'
};

export default FormInput;
