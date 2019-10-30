import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task !== "") {
      this.props.createTodo({...this.state, id: uuid(), completed: false });
      this.setState({ task: "" });
    }
  }
  render() {
    return(
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor="task">Todo...</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
          name="task"
        />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;
