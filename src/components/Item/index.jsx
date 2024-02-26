import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./index.css"


export default class Item extends Component {
  static propTypes = {
    checkTodo: PropTypes.func.isRequired,
    deleteOneTodo: PropTypes.func.isRequired
  }
  state = {
    mouse: false 
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag});
    }
  }
  handleCheck = (id) => {
    return (event) => {
      const {checkTodo} = this.props;
      checkTodo(id, event.target.checked);
    }
  }
  handleDelete = (id) => {
    return () => {
      if(window.confirm('你确定要删除吗？')){
        const {deleteOneTodo} = this.props;
        deleteOneTodo(id);
      }
    }
  }
  render() {
    let {id, name, done} = this.props;
    const {mouse} = this.state;
    return (
        <li
          style={{backgroundColor: mouse ? "#ddd" : "white"}}
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
        >
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display: mouse ? "block" : "none"}} onClick={this.handleDelete(id)}>删除</button>
        </li>
    )
  }
}
