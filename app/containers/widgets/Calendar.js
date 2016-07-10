import React from 'react';

export default function Calendar() {
  return (
    <div className="box box-solid bg-green-gradient">
      <div className="box-header">
        <i className="fa fa-calendar"></i>

        <h3 className="box-title">Calendar</h3>
        <div className="pull-right box-tools">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-success btn-sm dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="fa fa-bars"></i></button>
            <ul className="dropdown-menu pull-right" role="menu">
              <li><a href="#">Add new event</a></li>
              <li><a href="#">Clear events</a></li>
              <li className="divider"></li>
              <li><a href="#">View calendar</a></li>
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-success btn-sm"
            data-widget="collapse"
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            type="button"
            className="btn btn-success btn-sm"
            data-widget="remove"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div className="box-body no-padding">
        <div id="calendar" style={{ width: '100%' }}></div>
      </div>
      <div className="box-footer text-black">
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix">
              <span className="pull-left">Task #1</span>
              <small className="pull-right">90%</small>
            </div>
            <div className="progress xs">
              <div
                className="progress-bar progress-bar-green"
                style={{ width: '90%' }}
              >
              </div>
            </div>

            <div className="clearfix">
              <span className="pull-left">Task #2</span>
              <small className="pull-right">70%</small>
            </div>
            <div className="progress xs">
              <div
                className="progress-bar progress-bar-green"
                style={{ width: '70%' }}
              >
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="clearfix">
              <span className="pull-left">Task #3</span>
              <small className="pull-right">60%</small>
            </div>
            <div className="progress xs">
              <div
                className="progress-bar progress-bar-green"
                style={{ width: '60%' }}
              >
              </div>
            </div>

            <div className="clearfix">
              <span className="pull-left">Task #4</span>
              <small className="pull-right">40%</small>
            </div>
            <div className="progress xs">
              <div
                className="progress-bar progress-bar-green"
                style={{ width: '40%' }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
