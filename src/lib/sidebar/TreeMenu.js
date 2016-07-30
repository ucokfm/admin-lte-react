import React, { Component, PropTypes } from 'react';

import TreeSubMenu from './TreeSubMenu';

const propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  showLabel: PropTypes.bool,
  items: PropTypes.array,
  onClick: PropTypes.func,
  onItemClick: PropTypes.func,
};

const defaultProps = {
  icon: 'fa fa-circle-o',
  showLabel: true,
  items: [],
};

class TreeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuId: null,
    };
    this.renderLabel = this.renderLabel.bind(this);
    this.renderLink = this.renderLink.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  handleMenuClick(menu) {
    this.setState({
      selectedMenuId: menu.id,
    });
  }

  renderLabel() {
    if (this.props.showLabel === false) {
      return '';
    }
    if (this.props.label) {
      if (this.props.labelColor) {
        return (
          <small className={`label pull-right bg-${this.props.labelColor}`}>
            {this.props.label}
          </small>
        );
      }

      return (
        <small className="label label-primary pull-right">
          {this.props.label}
        </small>
      );
    }
    return <i className="fa fa-angle-left pull-right"></i>;
  }

  renderLink() {
    return (
      <a style={{ cursor: 'pointer' }} onClick={this.props.onClick}>
        <i className={`${this.props.icon} text-${this.props.iconColor}`} />
        <span> {this.props.title} </span>
        <span className="pull-right-container">
          {this.renderLabel()}
        </span>
      </a>
    );
  }

  renderItems() {
    if (this.props.items.length > 0) {
      return (
        <ul className="treeview-menu">
          {this.props.items.map((item) => {
            const isSelected = item.id === this.state.selectedMenuId;
            return (
              <TreeSubMenu
                {...item}
                isSelected={isSelected}
                onClick={() => this.props.onItemClick(item)}
                onItemClick={this.props.onItemClick}
              />
            );
          })}
        </ul>
      );
    }

    return '';
  }

  render() {
    return (
      <li className="treeview">
        {this.renderLink()}
        {this.renderItems()}
      </li>
    );
  }
}

TreeMenu.propTypes = propTypes;
TreeMenu.defaultProps = defaultProps;

export default TreeMenu;
