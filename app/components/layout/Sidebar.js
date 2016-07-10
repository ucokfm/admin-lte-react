import React from 'react';
import SidebarWrapper from '../../../lib/sidebar/SidebarWrapper';
import SidebarSearch from '../../../lib/sidebar/SidebarSearch';

import UserPanel from '../../containers/sidebar/UserPanel';
import MainMenu from '../../containers/sidebar/MainMenu';
import LabelsMenu from '../../containers/sidebar/LabelsMenu';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <UserPanel />
      <SidebarSearch placeholder="Search..." />
      <MainMenu />
      <LabelsMenu />
    </SidebarWrapper>
  );
}
