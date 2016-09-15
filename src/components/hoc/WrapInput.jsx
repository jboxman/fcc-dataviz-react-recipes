import React from 'react';

// Wouldn't it be nice to pass a name to a form field that matches
// a key in this.state and have its value populated automatically?

// TODO - Assume this.props.data is the proper src

export function WrapInputWithValue(WrappedComponent) {
  return class extends React.Component {
    render() {
      const value = this.props.data[this.props.name];
      const {data, ...props} = this.props;
      return <WrappedComponent {...props} value={value}/>
    }
  }
}
