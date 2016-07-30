import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

function PageHeader({ title, description, children }) {
  return (
    <section className="content-header">
      <h1>
        {title}{' '}<small>{description}</small>
      </h1>
      {children}
    </section>
  );
}

PageHeader.propTypes = propTypes;

export default PageHeader;
