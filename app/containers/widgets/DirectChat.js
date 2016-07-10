import React, { Component, PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string,
  chats: PropTypes.arrayOf(PropTypes.object),
  onSend: PropTypes.func,
};

export default class DirectChat extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: '',
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ text: '' });
  }

  renderChats() {
    return this.props.chats.map((chat) => (
      <div className="direct-chat-msg">
        <div className="direct-chat-info clearfix">
          <span className="direct-chat-name pull-left">
            {chat.name}
          </span>
          <span
            className="direct-chat-timestamp pull-right"
          >
            {chat.timestamp}
          </span>
        </div>
        <img
          className="direct-chat-img"
          src={chat.photo}
          alt="Message User"
        />
        <div className="direct-chat-text">
          {chat.text}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="box box-primary direct-chat direct-chat-primary">
        <div className="box-header with-border">
          <h3 className="box-title">{this.props.title}</h3>

          <div className="box-tools pull-right">
            <span
              data-toggle="tooltip"
              title="3 New Messages"
              className="badge bg-light-blue"
            >
              3
            </span>
            <button
              type="button"
              className="btn btn-box-tool"
              data-widget="collapse"
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              type="button"
              className="btn btn-box-tool"
              data-toggle="tooltip"
              title="Contacts"
              data-widget="chat-pane-toggle"
            >
              <i className="fa fa-comments"></i>
            </button>
            <button
              type="button"
              className="btn btn-box-tool"
              data-widget="remove"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
        <div className="box-body">
          <div className="direct-chat-messages">
            {this.renderChats()}
          </div>
          <div className="direct-chat-contacts">
            <ul className="contacts-list">
              <li>
                <a href="#">
                  <img
                    className="contacts-list-img"
                    src="../dist/img/user1-128x128.jpg"
                    alt="User"
                  />

                  <div className="contacts-list-info">
                    <span className="contacts-list-name">
                      Count Dracula
                      <small className="contacts-list-date pull-right">
                        2/28/2015
                      </small>
                    </span>
                    <span className="contacts-list-msg">
                      How have you been? I was...
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-footer">
          <form onSubmit={this.handleSubmit} method="post">
            <div className="input-group">
              <input
                onChange={this.handleChange}
                type="text"
                name="message"
                placeholder="Type Message ..."
                className="form-control"
                value={this.state.text}
              />
              <span className="input-group-btn">
                <button
                  onClick={() => this.props.onSend(this.state.text)}
                  className="btn btn-primary btn-flat"
                >
                  Send
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

DirectChat.propTypes = propTypes;
