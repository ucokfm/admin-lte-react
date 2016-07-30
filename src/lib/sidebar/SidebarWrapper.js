import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function SidebarWrapper({ children }) {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        {children}
      </section>
    </aside>
  );
}

SidebarWrapper.propTypes = propTypes;

export default SidebarWrapper;
