import $ from 'admin-lte/plugins/jQuery/jquery-2.2.3.min';
import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default class LoginBox extends Component {
  componentWillMount() {
    $('body').addClass('hold-transition login-page');
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
