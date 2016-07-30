import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const propTypes = {
  todos: PropTypes.array,
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
};

const defaultProps = {
  todos: [],
};

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      editMode: false,
      todoId: null,
      todoText: '',
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.showForm = this.showForm.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  handleChangeText(e) {
    e.preventDefault();
    this.setState({ todoText: e.target.value });
  }

  showForm() {
    this.setState({ showForm: true, editMode: false, todoText: '' });
  }

  saveTodo() {
    const todoId = this.state.todoId;
    const todoText = this.state.todoText;
    this.setState({ showForm: false });
    if (this.state.editMode) {
      this.props.onEdit(todoId, todoText);
    } else {
      this.props.onAdd(this.refs.newTodoText.value);
    }
  }

  editTodo(todo) {
    this.setState({
      showForm: true,
      editMode: true,
      todoId: todo.id,
      todoText: todo.text,
    });
  }

  handleTextChange(e) {
    this.setState({ todoText: e.target.value });
  }

  showDuration(createdAt) {
    return moment.duration(new Date() - createdAt).humanize();
  }

  renderButton() {
    if (this.state.showForm) {
      return (
        <button
          type="button"
          className="btn btn-default pull-right"
          onClick={this.saveTodo}
        >
          <i className="fa fa-save"></i> Save
        </button>
      );
    }

    return (
      <button
        type="button"
        className="btn btn-default pull-right"
        onClick={this.showForm}
      >
        <i className="fa fa-plus"></i> Add item
      </button>
    );
  }

  render() {
    return (
      <div className="box box-primary">
        <div className="box-header">
          <i className="ion ion-clipboard"></i>

          <h3 className="box-title">To Do List</h3>

          <div className="box-tools pull-right">
            <ul className="pagination pagination-sm inline">
              <li><a href="#">&laquo;</a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">&raquo;</a></li>
            </ul>
          </div>
        </div>
        <div className="box-body">
          {this.state.showForm ?
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Add new todo..."
                ref="newTodoText"
                value={this.state.todoText}
                onChange={this.handleTextChange}
              />
            </form>
            :
            <ul className="todo-list">
              {this.props.todos.map(todo =>
                <li key={todo.id}>
                  <span className="handle">
                    <i className="fa fa-ellipsis-v"></i>
                    <i className="fa fa-ellipsis-v"></i>
                  </span>
                  <input
                    type="checkbox"
                    value=""
                    name=""
                    onClick={this.props.onToggle}
                  />
                  <span className="text">{todo.text}</span>
                  <small
                    className="label label-danger"
                  >
                    <i className="fa fa-clock-o" />
                    <span> {this.showDuration(todo.createdAt)}</span>
                  </small>
                  <div className="tools">
                    <i
                      className="fa fa-edit"
                      onClick={() => this.editTodo(todo)}
                    />
                    <i
                      className="fa fa-trash-o"
                      onClick={() => this.props.onDelete(todo.id)}
                    />
                  </div>
                </li>
              )}
            </ul>
          }
        </div>
        <div className="box-footer clearfix no-border">
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;
