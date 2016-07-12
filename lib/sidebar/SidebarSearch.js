import React, { PropTypes } from 'react';

const propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
};

const defaultProps = {
  placeholder: 'Search...',
};

export default function SidebarSearch({ placeholder, onSubmit }) {
  let inputText = '';

  function handleInputTextChange(event) {
    inputText = event.target.value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(inputText);
  }

  return (
    <form className="sidebar-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="q"
          className="form-control"
          placeholder={placeholder}
          onChange={handleInputTextChange}
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
SidebarSearch.defaultProps = defaultProps;
