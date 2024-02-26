import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';


export default class App extends Component {
  //初始化数据
  state = {
    todos: [
      {id: "001", name: "Eat", done: true},
      {id: "002", name: "Sleep", done: false},
      {id: "003", name: "Shopping", done: false},
    ]
  }
  addTodo = (todoObj) => {
    const {todos} = this.state;
    let newTodo = [todoObj, ...todos];
    this.setState({todos: newTodo});
  }
  checkTodo = (id, done) => {
    // 获取todos
    const {todos} = this.state;
    //遍历判断id是否匹配
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj, done}
      else return todoObj;
    })
    this.setState({todos: newTodos});
  }
  deleteOneTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    })
    this.setState({todos: newTodos});
  }
  checkAllTodo = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done};
    });
    this.setState({todos: newTodos});
  }
  deleteAllTodo = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj) =>{
      return !todoObj.done
    });
    this.setState({todos: newTodos});
  }
  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} checkTodo={this.checkTodo} deleteOneTodo={this.deleteOneTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllTodo={this.deleteAllTodo}/>
        </div>
      </div>
    )
  }
}
