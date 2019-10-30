import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  create = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    }, () => {
      window.localStorage.setItem('taskList', JSON.stringify(this.state.todos))
    });
  }

  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    }, () => {
      window.localStorage.removeItem('taskList')
    });
  }

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, task: updatedTask}
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      completed={todo.completed}
      removeTodo={() => this.remove(todo.id)}
      updateTodo={this.update}
      toggleTodo={this.toggleCompletion}
      />      
    })
    return (
      <div className="TodoList">
        <h1>Todo App<span>React Todo List</span></h1>
        <ul>
          <li className="todo-list">{todos}</li>
        </ul>
        <NewTodoForm createTodo={this.create} />
      </div>

    )
  }
}

export default TodoList;
