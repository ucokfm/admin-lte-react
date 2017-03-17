import React, { Component, PropTypes } from 'react';

const propTypes = {
  count: PropTypes.string,
  countSign: PropTypes.string,
  title: PropTypes.string,
  iconClasses: PropTypes.string,
  url: PropTypes.string,
  urlText: PropTypes.string,
  color: PropTypes.string,
};

class StatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    };
  }

  render() {
    return (
      <div className={`small-box bg-${this.props.color}`}>
        <div className="inner">
          <h3>
            {this.state.count}
            <sup style={{ fontSize: 20 }}>{this.props.countSign}</sup>
          </h3>
          <p>{this.props.title}</p>
        </div>
        <div className="icon">
          <i className={this.props.iconClasses}></i>
        </div>
        {this.props.url &&
        <a href={this.props.url} className="small-box-footer">
          {this.props.urlText} <i className="fa fa-arrow-circle-right"></i>
        </a>}
      </div>
    );
  }
}

StatBox.propTypes = propTypes;

export default StatBox;
