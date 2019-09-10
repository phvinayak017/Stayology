import React from 'react';
import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Addtodo/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
