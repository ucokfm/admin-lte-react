import React from 'react';
import HeaderWrapper from 'admin-lte-react/HeaderWrapper';
import Logo from 'admin-lte-react/Logo';
import MiniLogo from 'admin-lte-react/MiniLogo';
import LargeLogo from 'admin-lte-react/LargeLogo';
import Navbar from 'admin-lte-react/Navbar';
import MessagesMenu from 'admin-lte-react/MessagesMenu';
import NotificationsMenu from 'admin-lte-react/NotificationsMenu';
import TasksMenu from 'admin-lte-react/TasksMenu';
import UserMenu from 'admin-lte-react/UserMenu';

import noAvatar from '../images/no-avatar.png';

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <MiniLogo>
          <b>S</b>im
        </MiniLogo>
        <LargeLogo>
          <b>Simple</b>Admin
        </LargeLogo>
      </Logo>
      <Navbar>
        <MessagesMenu />
        <NotificationsMenu />
        <TasksMenu />
        <UserMenu
          image={noAvatar}
          name="John Doe"
          title="Mr. John Doe"
          description="Javascript Full Stack Software Engineer"
          links={[
            { key: 1, text: 'Link 1' },
            { key: 2, text: 'Link 2' },
            { key: 3, text: 'Link 3' },
          ]}
          buttons={[
            { key: 1, text: 'Profile', align: 'left' },
            { key: 2, text: 'Logout' },
          ]}
        />
      </Navbar>
    </HeaderWrapper>
  );
}
