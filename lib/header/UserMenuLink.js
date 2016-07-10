import React, { PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
};

export default function UserMenuLink({ text, url }) {
  return (
    <div className="col-xs-4 text-center">
      <a href={url}>{text}</a>
    </div>
  );
}

UserMenuLink.propTypes = propTypes;
