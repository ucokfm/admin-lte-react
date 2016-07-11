import React, { PropTypes } from 'react';

const propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  timestamp: PropTypes.string,
  children: PropTypes.node,
};

export default function MessagesMenuItem(
  { image, name, timestamp, children }
) {
  return (
    <li>
      <a style={{ cursor: 'pointer' }}>
        <div className="pull-left">
          <img
            src={image}
            className="img-circle" alt="User"
          />
        </div>
        <h4>
          {name}
          <small><i className="fa fa-clock-o"></i> {timestamp}</small>
        </h4>
        <p>{children}</p>
      </a>
    </li>
  );
}

MessagesMenuItem.propTypes = propTypes;
