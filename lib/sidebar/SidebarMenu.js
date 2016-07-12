import React, { Component, PropTypes } from 'react';

import SidebarMenuWrapper from './SidebarMenuWrapper';
import SidebarMenuHeader from './SidebarMenuHeader';
import TreeMenu from './TreeMenu';

const propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  onItemClick: PropTypes.func,
};

export default class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderTreeMenus = this.renderTreeMenus.bind(this);
  }

  renderHeader() {
    if (!this.props.title) {
      return '';
    }
    return <SidebarMenuHeader title={this.props.title} />;
  }

  renderTreeMenus() {
    return this.props.items.map((item) => (
      <TreeMenu {...item} onClick={() => this.props.onItemClick(item)} />
    ));
  }

  render() {
    return (
      <SidebarMenuWrapper>
        {this.renderHeader()}
        {this.renderTreeMenus()}
      </SidebarMenuWrapper>
    );
  }
}

SidebarMenu.propTypes = propTypes;
