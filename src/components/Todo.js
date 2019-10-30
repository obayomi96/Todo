import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    }
  }

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  }

  toggleEditForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false });
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleToggle = (e) => {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result;
    this.state.isEditing ?
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
          <input
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.handleChange}
          />
          <button>Save</button>
        </form>
      </div>
    ) :
    result = (
      <div className="Todo Todo-buttons">
        <button onClick={this.toggleEditForm}><i className="fas fa-pen"></i></button>
        <button onClick={this.handleRemove}><i className="fas fa-trash"></i></button>
        <li onClick={this.handleToggle} className={this.props.completed ? "Todo-task completed" : "Todo-task" }>{this.props.task}</li>
      </div>
    )
    return result;
  }
}

export default Todo;
