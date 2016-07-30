import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  count: PropTypes.string,
  countSign: PropTypes.string,
  progressCount: PropTypes.number,
  progressText: PropTypes.string,
  color: PropTypes.string,
};

class InfoBox extends Component {
  getBoxClasses() {
    const bgColor = {};
    bgColor[`bg-${this.props.color}`] = this.hasProgress();
    return classNames('info-box', bgColor);
  }

  getIconClasses() {
    const bgColor = {};
    bgColor[`bg-${this.props.color}`] = !this.hasProgress();
    return classNames('info-box-icon', bgColor);
  }

  hasProgress() {
    return typeof this.props.progressCount === 'number';
  }

  renderProgress() {
    if (this.hasProgress()) {
      return (
        <div>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${this.props.progressCount}%` }}
            />
          </div>
          <span className="progress-description">
            {this.props.progressText}
          </span>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div className={this.getBoxClasses()}>
        <span className={this.getIconClasses()}>
          <i className={this.props.icon} />
        </span>

        <div className="info-box-content">
          <span className="info-box-text">{this.props.text}</span>
          <span className="info-box-number">
            {this.props.count}<small>{this.props.countSign}</small>
          </span>
          {this.renderProgress()}
        </div>

      </div>
    );
  }
}

InfoBox.propTypes = propTypes;

export default InfoBox;
