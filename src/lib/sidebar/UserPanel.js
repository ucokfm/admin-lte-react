import React, { PropTypes } from 'react';

const propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  statusIcon: PropTypes.string,
  statusText: PropTypes.string,
};

const defaultProps = {
  image: '/images/no-avatar.png',
  name: 'Full Name',
  statusIcon: 'fa fa-circle text-success',
  statusText: 'Online',
};

function UserPanel({ image, name, statusIcon, statusText }) {
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <img src={image} className="img-circle" alt="User" />
      </div>
      <div className="pull-left info">
        <p>{name}</p>
        <a><i className={statusIcon} /> {statusText}</a>
      </div>
    </div>
  );
}

UserPanel.propTypes = propTypes;
UserPanel.defaultProps = defaultProps;

export default UserPanel;
