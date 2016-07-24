import React from 'react';

const QuickEmail = () => (
  <div className="box box-info">
    <div className="box-header">
      <i className="fa fa-envelope"></i>

      <h3 className="box-title">Quick Email</h3>
      <div className="pull-right box-tools">
        <button
          type="button"
          className="btn btn-info btn-sm"
          data-widget="remove"
          data-toggle="tooltip"
          title="Remove"
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>
    <div className="box-body">
      <form action="#" method="post">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="emailto"
            placeholder="Email to:"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            className="textarea"
            placeholder="Message"
            style={{
              width: '100%',
              height: 125,
              fontSize: 14,
              lineHeight: 18,
              border: '1px solid #dddddd',
              padding: 10,
            }}
          >
          </textarea>
        </div>
      </form>
    </div>
    <div className="box-footer clearfix">
      <button
        type="button"
        className="pull-right btn btn-default"
        id="sendEmail"
      >
        Send <i className="fa fa-arrow-circle-right"></i>
      </button>
    </div>
  </div>
);

export default QuickEmail;
