import React, { Component } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoInput";

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

class App extends Component {
  render() {
    return (
      <div className="App">
hello from main app
<TodoInput />
<TodoList />
      </div>
    );
  }
}

export default App;
