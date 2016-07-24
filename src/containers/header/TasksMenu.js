import React from 'react';

import TasksMenu from '../../lib/header/TasksMenu';

const tasks = [
  {
    key: 1,
    id: 1,
    color: 'aqua',
    progress: 20,
    text: 'Design some buttons',
  },
  {
    key: 2,
    id: 2,
    color: 'green',
    progress: 40,
    text: 'Create a nice theme',
  },
  {
    key: 3,
    id: 3,
    color: 'red',
    progress: 60,
    text: 'Some task I need to do',
  },
  {
    key: 4,
    id: 4,
    color: 'yellow',
    progress: 80,
    text: 'Make beautiful transitions',
  },
  {
    key: 5,
    id: 5,
    color: 'aqua',
    progress: 20,
    text: 'Design some buttons',
  },
  {
    key: 6,
    id: 6,
    color: 'green',
    progress: 40,
    text: 'Create a nice theme',
  },
  {
    key: 7,
    id: 7,
    color: 'red',
    progress: 60,
    text: 'Some task I need to do',
  },
  {
    key: 8,
    id: 8,
    color: 'yellow',
    progress: 80,
    text: 'Make beautiful transitions',
  },
  {
    key: 9,
    id: 9,
    color: 'aqua',
    progress: 20,
    text: 'Design some buttons',
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
    <TasksMenu
      items={tasks}
      onItemClick={onItemClick}
      onFooterClick={onFooterClick}
    />
  );
}
