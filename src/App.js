import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'antd/lib/button';
import {Input} from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Input placeholder="Basic usage" />
      </div>
    );
  }
}

export default App;
