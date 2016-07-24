import React, { PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default function UserMenuLink({ text, onClick }) {
  return (
    <div className="col-xs-4 text-center">
      <a style={{ cursor: 'pointer' }} onClick={onClick}>{text}</a>
    </div>
  );
}

UserMenuLink.propTypes = propTypes;
