import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  url: '/',
};

export default function Logo({ url, children }) {
  return (
    <Link to={url} className="logo">
      {children}
    </Link>
  );
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;
