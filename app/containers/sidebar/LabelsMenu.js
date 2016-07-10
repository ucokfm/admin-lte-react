import React from 'react';

import SidebarMenu from '../../../lib/sidebar/SidebarMenu';

const menus = [
  {
    id: 1,
    iconColor: 'red',
    title: 'Important',
    noLabel: true,
  },
  {
    id: 2,
    iconColor: 'yellow',
    title: 'Warning',
    noLabel: true,
  },
  {
    id: 3,
    iconColor: 'aqua',
    title: 'Information',
    noLabel: true,
  },
];

export default function () {
  return (
    <SidebarMenu
      title="LABELS"
      menus={menus}
    />
  );
}
