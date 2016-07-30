import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default class LoginBox extends Component {
  componentWillMount() {
    window.$('body').addClass('hold-transition login-page');
  }

  render() {
    return (
      <div className="login-box">
        {this.props.children}
      </div>
    );
  }
}

LoginBox.propTypes = propTypes;
