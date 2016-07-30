import React, { PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string,
  align: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  text: 'Button',
  align: 'right',
};

function UserMenuButton({ text, align, onClick }) {
  return (
    <div className={`pull-${align}`}>
      <a
        className="btn btn-default btn-flat"
        onClick={onClick}
      >
        {text}
      </a>
    </div>
  );
}

UserMenuButton.propTypes = propTypes;
UserMenuButton.defaultProps = defaultProps;

export default UserMenuButton;
