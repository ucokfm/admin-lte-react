import React, { PropTypes } from 'react';

const propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

function TabPane({ id, children }) {
  return (
    <div className="tab-pane" id={id}>
      {children}
    </div>
  );
}

TabPane.propTypes = propTypes;

export default TabPane;
