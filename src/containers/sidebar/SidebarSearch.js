import React from 'react';

import SidebarSearch from '../../lib/sidebar/SidebarSearch';

function onSubmit(text) {
  // eslint-disable-next-line no-alert
  alert(`search: ${text}`);
}

export default function () {
  return (
    <SidebarSearch onSubmit={onSubmit} />
  );
}
