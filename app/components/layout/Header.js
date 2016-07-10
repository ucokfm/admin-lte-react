import React from 'react';

import HeaderWrapper from '../../../lib/header/HeaderWrapper';
import Logo from '../../../lib/header/Logo';
import MiniLogo from '../../../lib/header/MiniLogo';
import LargeLogo from '../../../lib/header/LargeLogo';
import Navbar from '../../../lib/header/Navbar';

import MessagesMenu from '../../containers/header/MessagesMenu';
import NotificationsMenu from '../../containers/header/NotificationsMenu';
import TasksMenu from '../../containers/header/TasksMenu';
import UserMenu from '../../containers/header/UserMenu';

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo url="/">
        <MiniLogo>
          <b>A</b>LT
        </MiniLogo>
        <LargeLogo>
          <b>Admin</b>LTE
        </LargeLogo>
      </Logo>
      <Navbar>
        <MessagesMenu />
        <NotificationsMenu />
        <TasksMenu />
        <UserMenu />
      </Navbar>
    </HeaderWrapper>
  );
}
