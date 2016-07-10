import React, { PropTypes } from 'react';

import UserMenuBody from './UserMenuBody';
import UserMenuLink from './UserMenuLink';
import UserMenuFooter from './UserMenuFooter';
import UserMenuButton from './UserMenuButton';

const propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  buttons: PropTypes.array,
};

export default function UserMenu(
  { image, name, title, description, links = [], buttons = [] }
) {
  return (
    <li className="dropdown user user-menu">
      <a href="" className="dropdown-toggle" data-toggle="dropdown">
        <img src={image} className="user-image" alt="User" />
        <span className="hidden-xs">{name}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="user-header">
          <img src={image} className="img-circle" alt="User" />
          <p>
            {title}
            <small>{description}</small>
          </p>
        </li>
        <UserMenuBody>
          {links.map(link =>
            <UserMenuLink {...link} />
          )}
        </UserMenuBody>
        <UserMenuFooter>
          {buttons.map(button =>
            <UserMenuButton {...button} />
          )}
        </UserMenuFooter>
      </ul>
    </li>
  );
}

UserMenu.propTypes = propTypes;
