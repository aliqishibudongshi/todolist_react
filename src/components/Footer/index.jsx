import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./index.css"


export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkAllTodo: PropTypes.func.isRequired,
    deleteAllTodo: PropTypes.func.isRequired
  }
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  handleDeleteAll = () => {
    this.props.deleteAllTodo();
  }
  render() {
    const {todos} = this.props;
    const total = todos.length;
    const completed = todos.reduce((prevTodo, currentTodo) => {
      return prevTodo + (currentTodo.done ? 1 : 0)
    }, 0);

    return (
        <div className="todo-footer">
            <label>
            <input type="checkbox" onChange={this.handleCheckAll} checked={completed === total && total !== 0 ? true: false}/>
            </label>
            <span>
            <span>已完成{completed}</span> / 全部{total}
            </span>
            <button onClick={this.handleDeleteAll} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
