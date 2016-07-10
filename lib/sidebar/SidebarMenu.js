import React, { Component, PropTypes } from 'react';

import SidebarMenuWrapper from './SidebarMenuWrapper';
import SidebarMenuHeader from './SidebarMenuHeader';
import TreeMenu from './TreeMenu';

const propTypes = {
  title: PropTypes.string,
  menus: PropTypes.array,
};

export default class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderMenus = this.renderMenus.bind(this);
  }

  renderHeader() {
    if (!this.props.title) {
      return '';
    }
    return <SidebarMenuHeader title={this.props.title} />;
  }

  renderMenus() {
    return this.props.menus.map((menu) => (
      <TreeMenu {...menu} key={menu.id} />
    ));
  }

  render() {
    return (
      <SidebarMenuWrapper>
        {this.renderHeader()}
        {this.renderMenus()}
      </SidebarMenuWrapper>
    );
  }
}

SidebarMenu.propTypes = propTypes;
