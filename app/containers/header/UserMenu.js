import React from 'react';

import UserMenu from '../../../lib/header/UserMenu';

const user = {
  name: 'Alexander Pierce',
  title: 'Web Developer',
  joined: 'Nov. 2012',
  avatar: 'node_modules/admin-lte/dist/img/user2-160x160.jpg',
  online: true,
};

function onLinkClick(link) {
  // eslint-disable-next-line no-alert
  alert(`route to ${link.url}`);
}

function onButtonClick(button) {
  // eslint-disable-next-line no-alert
  alert(`button ${button.text} clicked`);
}

export default function () {
  return (
    <UserMenu
      image={user.avatar}
      name={user.name}
      title={`${user.name} - ${user.title}`}
      description={`Member since ${user.joined}`}
      links={[
        { key: 1, text: 'Followers', url: '/followers' },
        { key: 2, text: 'Sales', url: '/sales' },
        { key: 3, text: 'Friends', url: '/friends' },
      ]}
      buttons={[
        { key: 1, text: 'Profile', align: 'left' },
        { key: 2, text: 'Sign out' },
      ]}
      onLinkClick={onLinkClick}
      onButtonClick={onButtonClick}
    />
  );
}
