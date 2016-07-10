import React, { PropTypes } from 'react';

import TasksMenuItem from './TasksMenuItem';

const propTypes = {
  tasks: PropTypes.array,
};

export default function TasksMenu({ tasks = [] }) {
  const count = tasks.length;
  return (
    <li className="dropdown tasks-menu">
      <a href="" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-flag-o"></i>
        <span className="label label-danger">{count}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have {count} tasks</li>
        <li>
          <ul className="menu">
            {tasks.map(task =>
              <TasksMenuItem
                {...task}
              >
                {task.text}
              </TasksMenuItem>
            )}
          </ul>
        </li>
        <li className="footer"><a href="">View all tasks</a></li>
      </ul>
    </li>
  );
}

TasksMenu.propTypes = propTypes;
