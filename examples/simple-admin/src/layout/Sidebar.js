import React from 'react';
import SidebarWrapper from 'admin-lte-react/SidebarWrapper';
import UserPanel from 'admin-lte-react/UserPanel';

import noAvatar from '../images/no-avatar.png';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <UserPanel
        image={noAvatar}
        name="John Doe"
      />
    </SidebarWrapper>
  );
}
