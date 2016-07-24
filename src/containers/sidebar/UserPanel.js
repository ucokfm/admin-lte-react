import React from 'react';

import UserPanel from '../../../lib/sidebar/UserPanel';

const user = {
  name: 'Alexander Pierce',
  title: 'Web Developer',
  joined: 'Nov. 2012',
  avatar: 'node_modules/admin-lte/dist/img/user2-160x160.jpg',
  isOnline: true,
};

export default function () {
  const onlineIcon = 'fa fa-circle text-success';
  const offlineIcon = 'fa fa-circle text-danger';
  const statusIcon = user.isOnline ? onlineIcon : offlineIcon;
  const statusText = user.isOnline ? 'Online' : 'Offline';
  return (
    <UserPanel
      image={user.avatar}
      name={user.name}
      statusIcon={statusIcon}
      statusText={statusText}
    />
  );
}
