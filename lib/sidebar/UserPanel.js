import React, { PropTypes } from 'react';

const propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  online: PropTypes.bool,
};

export default function UserPanel({ image, name, online }) {
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <img src={image} className="img-circle" alt="User" />
      </div>
      <div className="pull-left info">
        <p>{name}</p>
        {online
          ? <a><i className="fa fa-circle text-success" /> Online</a>
          : <a><i className="fa fa-circle text-danger" /> Offline</a>
        }
      </div>
    </div>
  );
}

UserPanel.propTypes = propTypes;
