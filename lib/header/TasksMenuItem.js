import React, { PropTypes } from 'react';

const propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default function TasksMenuItem({ progress, color, children }) {
  return (
    <li>
      <a href="">
        <h3>
          {children}
          <small className="pull-right">{progress}%</small>
        </h3>
        <div className="progress xs">
          <div
            className={`progress-bar progress-bar-${color}`}
            style={{ width: `${progress}%` }} role="progressbar"
            aria-valuenow={`${progress}`} aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="sr-only">{progress}% Complete</span>
          </div>
        </div>
      </a>
    </li>
  );
}

TasksMenuItem.propTypes = propTypes;
