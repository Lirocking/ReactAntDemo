import React, { Component } from 'react';
import './App.css';

import Button from 'antd/lib/button';
import TodoItem from './TodoItem';


class TodoList extends Component {

  constructor(props) {
    super(props);
    // 声明属性
    this.state = {
      listA: [],
      inputValue: ''
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  // Button Click Event
  handleButtonClick() {
    this.setState({
      listA: [...this.state.listA, this.state.inputValue],
      inputValue: ''
    })
  }
  // Input绑定事件
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleLiClick(index) {
    const listA = [...this.state.listA];
    listA.splice(index, 1);
    this.setState({listA});
  }

  handleDelete(index) {
    const listA = [...this.state.listA];
    listA.splice(index, 1);
    this.setState({listA});
  }
  
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <Button onClick={this.handleButtonClick}>add</Button>
        </div>
        <ul>
          {
            this.state.listA.map((item, index) => {
              return <TodoItem deleteItem={this.handleDelete} key={index} content={item} index={index}></TodoItem>
              //return <li key={index} onClick={this.handleLiClick.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
