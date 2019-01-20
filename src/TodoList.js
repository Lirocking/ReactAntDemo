import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'antd/lib/button';
import {Input} from 'antd';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listA: [
       
      ]
    }
  }

  handleButtonClick() {
    this.setState({
      listA: [...this.state.listA, 'hello world']
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <input/>
          <button onClick={this.handleButtonClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.listA.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
