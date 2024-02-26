import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Item from "../Item"
import "./index.css"

export default class List extends Component {
  //对props限制
  static propTypes = {
    checkTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    deleteOneTodo: PropTypes.func.isRequired
  }
  render() {
    let {todos, checkTodo, deleteOneTodo} = this.props;
    return (
        <ul className="todo-main">
          {
            todos.map(todo => {
              return <Item key={todo.id} {...todo} checkTodo={checkTodo} deleteOneTodo={deleteOneTodo}/>
            })
          }
        </ul>
    )
  }
}
