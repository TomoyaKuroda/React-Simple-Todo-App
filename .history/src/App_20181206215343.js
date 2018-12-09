import React, { Component } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoInput";

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
