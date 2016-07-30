import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function TabContent({ children }) {
  return (
    <div className="tab-content">
      {children}
    </div>
  );
}

TabContent.propTypes = propTypes;

export default TabContent;
