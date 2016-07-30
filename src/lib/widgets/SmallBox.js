import React, { PropTypes } from 'react';

const propTypes = {
  number: PropTypes.number,
  sign: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  url: PropTypes.string,
};

const defaultProps = {
  number: 150,
  sign: '',
  text: 'New Orders',
  icon: 'ion-bag',
  color: 'aqua',
  url: '/new-orders',
};

function SmallBox({ number, sign, text, icon, color, url }) {
  return (
    <div className="col-lg-3 col-xs-6">
      <div className={`small-box bg-${color}`}>
        <div className="inner">
          <h3>
            {number}
            <sup style={{ fontSize: 20 }}>{sign}</sup>
          </h3>
          <p>{text}</p>
        </div>
        <div className="icon">
          <i className={`ion ${icon}`}></i>
        </div>
        <a href={url} className="small-box-footer">
          More info <i className="fa fa-arrow-circle-right"></i>
        </a>
      </div>
    </div>
  );
}

SmallBox.propTypes = propTypes;
SmallBox.defaultProps = defaultProps;

export default SmallBox;
