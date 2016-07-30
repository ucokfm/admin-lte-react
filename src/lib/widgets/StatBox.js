import React, { PropTypes } from 'react';

const propTypes = {
  count: PropTypes.string,
  countSign: PropTypes.string,
  title: PropTypes.string,
  iconClasses: PropTypes.string,
  url: PropTypes.string,
  urlText: PropTypes.string,
  color: PropTypes.string,
};

function StatBox({
  count, countSign, title,
  iconClasses, url, urlText, color,
}) {
  return (
    <div className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>
          {count}
          <sup style={{ fontSize: 20 }}>{countSign}</sup>
        </h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        <i className={iconClasses}></i>
      </div>
      <a href={url} className="small-box-footer">
        {urlText} <i className="fa fa-arrow-circle-right"></i>
      </a>
    </div>
  );
}

StatBox.propTypes = propTypes;

export default StatBox;
