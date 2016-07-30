import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

class PageWrapper extends Component {
  componentDidMount() {
    if (window.$ && window.$.AdminLTE) {
      window.$.AdminLTE.layout.fix();
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        {this.props.children}
      </div>
    );
  }
}

PageWrapper.propTypes = propTypes;

export default PageWrapper;
