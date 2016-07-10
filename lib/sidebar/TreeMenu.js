import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import TreeMenuItem from './TreeMenuItem';

const propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  noLabel: PropTypes.bool,
  url: PropTypes.string,
  menus: PropTypes.array,
};

const defaultProps = {
  icon: 'fa fa-circle-o',
  url: '',
  noLabel: false,
  menus: [],
};

export default class TreeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuId: null,
    };
    this.renderLink = this.renderLink.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.renderMenus = this.renderMenus.bind(this);
  }

  handleMenuClick(menu) {
    this.setState({
      selectedMenuId: menu.id,
    });
  }

  renderLink() {
    if (this.props.url) {
      return (
        <Link to={this.props.url}>
          <i className={`${this.props.icon} text-${this.props.iconColor}`} />
          <span> {this.props.title} </span>
          <span className="pull-right-container">
            {this.renderLabel()}
          </span>
        </Link>
      );
    }

    return (
      <a href="">
        <i className={`${this.props.icon} text-${this.props.iconColor}`} />
        <span> {this.props.title} </span>
        <span className="pull-right-container">
          {this.renderLabel()}
        </span>
      </a>
    );
  }

  renderLabel() {
    if (this.props.noLabel) {
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

  renderMenus() {
    if (this.props.menus.length > 0) {
      return (
        <ul className="treeview-menu">
          {this.props.menus.map((menu) => {
            const isSelected = menu.id === this.state.selectedMenuId;
            return (
              <TreeMenuItem
                key={menu.id}
                {...menu}
                isSelected={isSelected}
                onMenuClick={() => this.handleMenuClick(menu)}
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
        {this.renderMenus()}
      </li>
    );
  }
}

TreeMenu.propTypes = propTypes;
TreeMenu.defaultProps = defaultProps;
