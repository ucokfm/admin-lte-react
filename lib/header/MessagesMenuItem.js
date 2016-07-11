import React, { PropTypes } from 'react';

const propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  timestamp: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  image: '/images/user.png',
  name: 'Not Available',
  timestamp: 'N/A',
};

function MessagesMenuItem({ image, name, timestamp, children, onClick }) {
  return (
    <li>
      <a style={{ cursor: 'pointer' }} onClick={onClick}>
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
MessagesMenuItem.defaultProps = defaultProps;

export default MessagesMenuItem;
