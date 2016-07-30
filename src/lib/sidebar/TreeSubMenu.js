import React, { Component, PropTypes } from 'react';

const propTypes = {
  icon: PropTypes.string,
  showIcon: PropTypes.bool,
  title: PropTypes.string,
  items: PropTypes.array,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  onItemClick: PropTypes.func,
};

const defaultProps = {
  icon: 'fa fa-circle-o',
  showIcon: true,
  isSelected: false,
  items: [],
};

class TreeSubMenu extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItems.bind(this);
  }

  renderItems() {
    if (this.props.items.length > 0) {
      return (
        <ul className="treeview-menu">
          {this.props.items.map((item) => (
            <TreeSubMenu
              {...item}
              onClick={() => this.props.onItemClick(item)}
              onItemClick={this.props.onItemClick}
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
        <a style={{ cursor: 'pointer' }} onClick={this.props.onClick}>
          {this.props.showIcon
            ? <i className={this.props.icon}></i>
            : ''
          }
          <span> {this.props.title} </span>
          {this.props.items.length > 0
            ?
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
            : ''
          }
        </a>
        {this.renderItems()}
      </li>
    );
  }
}

TreeSubMenu.propTypes = propTypes;
TreeSubMenu.defaultProps = defaultProps;

export default TreeSubMenu;
