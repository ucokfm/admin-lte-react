import React, { PropTypes, Component } from 'react';

import BreadcrumbItem from './BreadcrumbItem';

const propTypes = {
  items: PropTypes.array,
};

class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return this.props.items.map((item) => <BreadcrumbItem {...item} />);
  }

  render() {
    return (
      <ol className="breadcrumb">
        {this.renderItems()}
      </ol>
    );
  }
}

Breadcrumb.propTypes = propTypes;

export default Breadcrumb;
