import React from 'react';
import SidebarWrapper from '../../../lib/sidebar/SidebarWrapper';

import UserPanel from '../../containers/sidebar/UserPanel';
import SidebarSearch from '../../containers/sidebar/SidebarSearch';
import MainMenu from '../../containers/sidebar/MainMenu';
import LabelsMenu from '../../containers/sidebar/LabelsMenu';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <UserPanel />
      <SidebarSearch />
      <MainMenu />
      <LabelsMenu />
    </SidebarWrapper>
  );
}
