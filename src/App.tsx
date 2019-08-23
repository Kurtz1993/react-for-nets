import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
