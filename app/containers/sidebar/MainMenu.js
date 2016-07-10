import React from 'react';

import SidebarMenu from '../../../lib/sidebar/SidebarMenu';

const menus = [
  {
    id: 1,
    icon: 'fa fa-dashboard',
    title: 'Dashboard',
    menus: [
      { id: 11, title: 'Dashboard v1', url: '/dashboard/v1' },
      { id: 12, title: 'Dashboard v2', url: '/dashboard/v2' },
    ],
  },
  {
    id: 2,
    icon: 'fa fa-files-o',
    title: 'Layout Options',
    label: '4',
    menus: [
      { id: 21, title: 'Top Navigation' },
      { id: 22, title: 'Boxed' },
      { id: 23, title: 'Fixed' },
      { id: 24, title: 'Collapsed Sidebar' },
    ],
  },
  {
    id: 3,
    icon: 'fa fa-th',
    title: 'Widgets',
    label: 'new',
    labelColor: 'green',
    url: '/widgets',
  },
  {
    id: 4,
    icon: 'fa fa-pie-chart',
    title: 'Charts',
    menus: [
      { id: 41, title: 'ChartJS' },
      { id: 42, title: 'Morris' },
      { id: 43, title: 'Flot' },
      { id: 44, title: 'Inline charts' },
    ],
  },
  {
    id: 5,
    icon: 'fa fa-laptop',
    title: 'UI Elements',
    menus: [
      { id: 51, title: 'General' },
      { id: 52, title: 'Icons' },
      { id: 53, title: 'Buttons' },
      { id: 54, title: 'Sliders' },
      { id: 55, title: 'Timeline' },
      { id: 56, title: 'Modals' },
    ],
  },
  {
    id: 6,
    icon: 'fa fa-edit',
    title: 'Forms',
    menus: [
      { id: 61, title: 'General Elements' },
      { id: 62, title: 'Advanced Elements' },
      { id: 63, title: 'Editors' },
    ],
  },
  {
    id: 7,
    icon: 'fa fa-table',
    title: 'Tables',
    menus: [
      { id: 71, title: 'Simple tables' },
      { id: 72, title: 'Data tables' },
    ],
  },
  {
    id: 8,
    icon: 'fa fa-calendar',
    title: 'Calendar',
    label: '3',
    labelColor: 'red',
  },
  {
    id: 9,
    icon: 'fa fa-envelope',
    title: 'Mailbox',
    label: '12',
    labelColor: 'yellow',
    menus: [
      {
        id: 91,
        noIcon: true,
        title: 'Inbox',
        label: '13',
        labelColor: 'blue',
      },
      {
        id: 92,
        noIcon: true,
        title: 'Compose',
      },
      {
        id: 93,
        noIcon: true,
        title: 'Read',
      },
    ],
  },
  {
    id: 10,
    icon: 'fa fa-folder',
    title: 'Examples',
    menus: [
      { id: 101, title: 'Invoice' },
      { id: 102, title: 'Profile' },
      { id: 103, title: 'Login' },
      { id: 104, title: 'Register' },
      { id: 105, title: 'Lockscreen' },
      { id: 106, title: '404 Error' },
      { id: 107, title: '500 Error' },
      { id: 108, title: 'Blank Page', url: '/examples/blank-page' },
      { id: 109, title: 'Pace Page' },
    ],
  },
  {
    id: 11,
    icon: 'fa fa-share',
    title: 'Multilevel',
    menus: [
      { id: 111, title: 'Level One', url: '/level-one' },
      { id: 112,
        title: 'Level One',
        menus: [
          { id: 1121, title: 'Level Two', url: '/level-two' },
          { id: 1122,
            title: 'Level Two',
            menus: [
              { id: 112201, title: 'Level Three', url: '/level-three' },
              { id: 112202, title: 'Level Three', url: '/level-three' },
            ],
          },
        ],
      },
      { id: 113, title: 'Level One', url: '/level-one' },
    ],
  },
  {
    id: 12,
    icon: 'fa fa-book',
    title: 'Documentation',
    noLabel: true,
    url: '/documentation',
  },
];

export default function () {
  return (
    <SidebarMenu
      title="MAIN NAVIGATION"
      menus={menus}
    />
  );
}
