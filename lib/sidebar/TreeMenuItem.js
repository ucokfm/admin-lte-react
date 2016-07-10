import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  icon: PropTypes.string,
  noIcon: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  menus: PropTypes.array,
  isSelected: PropTypes.bool,
  onMenuClick: PropTypes.func,
};

const defaultProps = {
  icon: 'fa fa-circle-o',
  noIcon: false,
  url: '',
  isSelected: false,
  menus: [],
};

export default class TreeMenuItem extends Component {
  constructor(props) {
    super(props);
    this.renderSubMenus = this.renderSubMenus.bind(this);
  }

  renderSubMenus() {
    if (this.props.menus.length > 0) {
      return (
        <ul className="treeview-menu">
          {this.props.menus.map((menu) => (
            <TreeMenuItem
              {...menu}
              key={menu.id}
            />
          ))}
        </ul>
      );
    }

    return '';
  }

  render() {
    return (
      <li className={this.props.isSelected ? 'active' : ''}>
        <Link to={this.props.url} onClick={this.props.onMenuClick}>
          {this.props.noIcon
            ? ''
            : <i className={this.props.icon}></i>
          }
          <span> {this.props.title} </span>
          {this.props.menus.length > 0
            ?
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
            : ''
          }
        </Link>
        {this.renderSubMenus()}
      </li>
    );
  }
}

TreeMenuItem.propTypes = propTypes;
TreeMenuItem.defaultProps = defaultProps;
