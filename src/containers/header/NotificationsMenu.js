import React from 'react';

import NotificationsMenu from '../../lib/header/NotificationsMenu';

const notifications = [
  {
    key: 1,
    id: 1,
    icon: 'fa fa-users',
    iconColor: 'aqua',
    text: '5 new members joined today',
  },
  {
    key: 2,
    id: 2,
    icon: 'fa fa-warning',
    iconColor: 'yellow',
    text: 'Very long description here that may n...',
  },
  {
    key: 3,
    id: 3,
    icon: 'fa fa-users',
    iconColor: 'red',
    text: '5 new members joined',
  },
  {
    key: 4,
    id: 4,
    icon: 'fa fa-shopping-cart',
    iconColor: 'green',
    text: '25 sales made',
  },
  {
    key: 5,
    id: 5,
    icon: 'fa fa-user',
    iconColor: 'red',
    text: 'You changed you username',
  },
  {
    key: 6,
    id: 6,
    icon: 'fa fa-users',
    iconColor: 'aqua',
    text: '5 new members joined today',
  },
  {
    key: 7,
    id: 7,
    icon: 'fa fa-warning',
    iconColor: 'yellow',
    text: 'Very long description here that may n...',
  },
  {
    key: 8,
    id: 8,
    icon: 'fa fa-users',
    iconColor: 'red',
    text: '5 new members joined',
  },
  {
    key: 9,
    id: 9,
    icon: 'fa fa-shopping-cart',
    iconColor: 'green',
    text: '25 sales made',
  },
  {
    key: 10,
    id: 10,
    icon: 'fa fa-user',
    iconColor: 'red',
    text: 'You changed you username',
  },
];

function onItemClick(item) {
  // eslint-disable-next-line no-alert
  alert(`item ${item.id} clicked`);
}

function onFooterClick() {
  // eslint-disable-next-line no-alert
  alert('footer clicked');
}

export default function () {
  return (
    <NotificationsMenu
      items={notifications}
      onItemClick={onItemClick}
      onFooterClick={onFooterClick}
    />
  );
}
