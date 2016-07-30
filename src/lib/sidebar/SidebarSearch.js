import React, { PropTypes } from 'react';

const propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
};

const defaultProps = {
  placeholder: 'Search...',
};

function SidebarSearch({ placeholder, onSubmit }) {
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
          className="form-control"
          placeholder={placeholder}
          onChange={handleInputTextChange}
        />
        <span className="input-group-btn">
          <button
            type="submit"
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

export default SidebarSearch;
