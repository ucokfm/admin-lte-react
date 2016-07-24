import React from 'react';

import MessagesMenu from '../../../lib/header/MessagesMenu';

const messages = [
  {
    key: 1,
    id: 1,
    image: '/node_modules/admin-lte/dist/img/user2-160x160.jpg',
    name: 'Support Team',
    text: 'Why not buy a new awesome theme?',
    timestamp: '5 mins',
  },
  {
    key: 2,
    id: 2,
    image: '/node_modules/admin-lte/dist/img/user3-128x128.jpg',
    name: 'AdminLTE Design Team',
    text: 'Why not buy a new awesome theme?',
    timestamp: '2 hours',
  },
  {
    key: 3,
    id: 3,
    image: '/node_modules/admin-lte/dist/img/user4-128x128.jpg',
    name: 'Developers',
    text: 'Why not buy a new awesome theme?',
    timestamp: 'Today',
  },
  {
    key: 4,
    id: 4,
    image: '/node_modules/admin-lte/dist/img/user3-128x128.jpg',
    name: 'Sales Department',
    text: 'Why not buy a new awesome theme?',
    timestamp: 'Yesterday',
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
    <MessagesMenu
      items={messages}
      onItemClick={onItemClick}
      onFooterClick={onFooterClick}
    />
  );
}
