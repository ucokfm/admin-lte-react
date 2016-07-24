import React from 'react';

export default function Visitors() {
  return (
    <div className="box box-solid bg-light-blue-gradient">
      <div className="box-header">
        <div className="pull-right box-tools">
          <button
            type="button"
            className="btn btn-primary btn-sm daterange pull-right"
            data-toggle="tooltip" title="Date range"
          >
            <i className="fa fa-calendar"></i></button>
          <button
            type="button"
            className="btn btn-primary btn-sm pull-right"
            data-widget="collapse"
            data-toggle="tooltip"
            title="Collapse"
            style={{ marginRight: 5 }}
          >
            <i className="fa fa-minus"></i></button>
        </div>

        <i className="fa fa-map-marker"></i>

        <h3 className="box-title">
          Visitors
        </h3>
      </div>
      <div className="box-body">
        <div id="world-map" style={{ height: 250, width: '100%' }}></div>
      </div>
      <div className="box-footer no-border">
        <div className="row">
          <div
            className="col-xs-4 text-center"
            style={{ borderRight: '1px solid #f4f4f4' }}
          >
            <div id="sparkline-1"></div>
            <div className="knob-label">Visitors</div>
          </div>
          <div
            className="col-xs-4 text-center"
            style={{ borderRight: '1px solid #f4f4f4' }}
          >
            <div id="sparkline-2"></div>
            <div className="knob-label">Online</div>
          </div>
          <div className="col-xs-4 text-center">
            <div id="sparkline-3"></div>
            <div className="knob-label">Exists</div>
          </div>
        </div>
      </div>
    </div>
  );
}
