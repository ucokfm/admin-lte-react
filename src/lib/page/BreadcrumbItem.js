import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

function BreadcrumbItem({ icon, title, url }) {
  return (
    <li className={classNames({ active: !url })}>
      {url
        ? <a href={url}>{icon ? <i className={icon} /> : ''} {title}</a>
        : title
      }
    </li>
  );
}

BreadcrumbItem.propTypes = propTypes;

export default BreadcrumbItem;
