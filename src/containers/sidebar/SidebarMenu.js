import React from 'react';
import { browserHistory } from 'react-router';

import SidebarMenuWrapper from '../../lib/sidebar/SidebarMenuWrapper';
import SidebarMenuHeader from '../../lib/sidebar/SidebarMenuHeader';
import TreeMenu from '../../lib/sidebar/TreeMenu';

const mainMenus = [
  {
    key: 1,
    id: 1,
    icon: 'fa fa-dashboard',
    title: 'Dashboard',
    items: [
      { key: 11, id: 11, title: 'Dashboard v1', url: '/dashboard/v1' },
      { key: 12, id: 12, title: 'Dashboard v2', url: '/dashboard/v2' },
    ],
  },
  {
    key: 2,
    id: 2,
    icon: 'fa fa-files-o',
    title: 'Layout Options',
    label: '4',
    items: [
      { key: 21, id: 21, title: 'Top Navigation' },
      { key: 22, id: 22, title: 'Boxed' },
      { key: 23, id: 23, title: 'Fixed' },
      { key: 24, id: 24, title: 'Collapsed Sidebar' },
    ],
  },
  {
    key: 3,
    id: 3,
    icon: 'fa fa-th',
    title: 'Widgets',
    label: 'new',
    labelColor: 'green',
    url: '/widgets',
  },
  {
    key: 4,
    id: 4,
    icon: 'fa fa-pie-chart',
    title: 'Charts',
    items: [
      { key: 41, id: 41, title: 'ChartJS' },
      { key: 42, id: 42, title: 'Morris' },
      { key: 43, id: 43, title: 'Flot' },
      { key: 44, id: 44, title: 'Inline charts' },
    ],
  },
  {
    key: 5,
    id: 5,
    icon: 'fa fa-laptop',
    title: 'UI Elements',
    items: [
      { key: 51, id: 51, title: 'General' },
      { key: 52, id: 52, title: 'Icons' },
      { key: 53, id: 53, title: 'Buttons' },
      { key: 54, id: 54, title: 'Sliders' },
      { key: 55, id: 55, title: 'Timeline' },
      { key: 56, id: 56, title: 'Modals' },
    ],
  },
  {
    key: 6,
    id: 6,
    icon: 'fa fa-edit',
    title: 'Forms',
    items: [
      { key: 61, id: 61, title: 'General Elements' },
      { key: 62, id: 62, title: 'Advanced Elements' },
      { key: 63, id: 63, title: 'Editors' },
    ],
  },
  {
    key: 7,
    id: 7,
    icon: 'fa fa-table',
    title: 'Tables',
    items: [
      { key: 71, id: 71, title: 'Simple tables' },
      { key: 72, id: 72, title: 'Data tables' },
    ],
  },
  {
    key: 8,
    id: 8,
    icon: 'fa fa-calendar',
    title: 'Calendar',
    label: '3',
    labelColor: 'red',
  },
  {
    key: 9,
    id: 9,
    icon: 'fa fa-envelope',
    title: 'Mailbox',
    label: '12',
    labelColor: 'yellow',
    items: [
      {
        key: 91,
        id: 91,
        noIcon: true,
        title: 'Inbox',
        label: '13',
        labelColor: 'blue',
      },
      {
        key: 92,
        id: 92,
        noIcon: true,
        title: 'Compose',
      },
      {
        key: 93,
        id: 93,
        noIcon: true,
        title: 'Read',
      },
    ],
  },
  {
    key: 10,
    id: 10,
    icon: 'fa fa-folder',
    title: 'Examples',
    items: [
      { key: 101, id: 101, title: 'Invoice' },
      { key: 102, id: 102, title: 'Profile' },
      { key: 103, id: 103, title: 'Login' },
      { key: 104, id: 104, title: 'Register' },
      { key: 105, id: 105, title: 'Lockscreen' },
      { key: 106, id: 106, title: '404 Error' },
      { key: 107, id: 107, title: '500 Error' },
      { key: 108, id: 108, title: 'Blank Page', url: '/examples/blank-page' },
      { key: 109, id: 109, title: 'Pace Page' },
    ],
  },
  {
    key: 11,
    id: 11,
    icon: 'fa fa-share',
    title: 'Multilevel',
    items: [
      { key: 111, id: 111, title: 'Level One', url: '/level-one' },
      {
        key: 112,
        id: 112,
        title: 'Level One',
        items: [
          { key: 1121, id: 1121, title: 'Level Two', url: '/level-two' },
          { key: 1122, id: 1122,
            title: 'Level Two',
            items: [
              {
                key: 112201,
                id: 112201,
                title: 'Level Three',
                url: '/level-three',
              },
              {
                key: 112202,
                id: 112202,
                title: 'Level Three',
                url: '/level-three',
              },
            ],
          },
        ],
      },
      { key: 113, id: 113, title: 'Level One', url: '/level-one' },
    ],
  },
  {
    key: 12,
    id: 12,
    icon: 'fa fa-book',
    title: 'Documentation',
    url: '/documentation',
    showLabel: false,
  },
];

const labelsMenus = [
  {
    key: 91,
    id: 91,
    iconColor: 'red',
    title: 'Important',
    showLabel: false,
  },
  {
    key: 92,
    id: 92,
    iconColor: 'yellow',
    title: 'Warning',
    showLabel: false,
  },
  {
    key: 93,
    id: 93,
    iconColor: 'aqua',
    title: 'Information',
    showLabel: false,
  },
];


function onMenuClick(item) {
  if (item.url) {
    browserHistory.push(item.url);
  }
}

export default function SidebarMenu() {
  return (
    <SidebarMenuWrapper>
      <SidebarMenuHeader title="MAIN NAVIGATION" />
      {mainMenus.map((menu) =>
        <TreeMenu
          {...menu}
          onClick={() => onMenuClick(menu)}
          onItemClick={onMenuClick}
        />
      )}
      <SidebarMenuHeader title="LABELS" />
      {labelsMenus.map((menu) =>
        <TreeMenu
          {...menu}
          onClick={() => onMenuClick(menu)}
          onItemClick={onMenuClick}
        />
      )}
    </SidebarMenuWrapper>
  );
}
