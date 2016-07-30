import React, { PropTypes } from 'react';

import TasksMenuItem from './TasksMenuItem';

const propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
  onFooterClick: PropTypes.func,
};

const defaultProps = {
  items: [],
};

function TasksMenu({ items, onItemClick, onFooterClick }) {
  const count = items.length;
  return (
    <li className="dropdown tasks-menu">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        style={{ cursor: 'pointer' }}
      >
        <i className="fa fa-flag-o"></i>
        <span className="label label-danger">{count}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have {count} tasks</li>
        <li>
          <ul className="menu">
            {items.map(item =>
              <TasksMenuItem
                {...item}
                onClick={() => onItemClick(item)}
              >
                {item.text}
              </TasksMenuItem>
            )}
          </ul>
        </li>
        <li className="footer">
          <a style={{ cursor: 'pointer' }} onClick={onFooterClick}>
            View all tasks
          </a>
        </li>
      </ul>
    </li>
  );
}

TasksMenu.propTypes = propTypes;
TasksMenu.defaultProps = defaultProps;

export default TasksMenu;
