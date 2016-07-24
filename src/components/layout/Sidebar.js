import React from 'react';
import SidebarWrapper from '../../../lib/sidebar/SidebarWrapper';

import UserPanel from '../../containers/sidebar/UserPanel';
import SidebarSearch from '../../containers/sidebar/SidebarSearch';
import SidebarMenu from '../../containers/sidebar/SidebarMenu';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <UserPanel />
      <SidebarSearch />
      <SidebarMenu />
    </SidebarWrapper>
  );
}
