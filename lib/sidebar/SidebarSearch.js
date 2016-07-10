import React, { PropTypes } from 'react';

const propTypes = {
  placeholder: PropTypes.string,
};

export default function SidebarSearch({ placeholder }) {
  return (
    <form action="" method="get" className="sidebar-form">
      <div className="input-group">
        <input
          type="text"
          name="q"
          className="form-control"
          placeholder={placeholder}
        />
        <span className="input-group-btn">
          <button
            type="submit"
            name="search"
            id="search-btn"
            className="btn btn-flat"
          >
            <i className="fa fa-search" />
          </button>
        </span>
      </div>
    </form>
  );
}

SidebarSearch.propTypes = propTypes;
