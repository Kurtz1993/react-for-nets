import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SimpleClock from './components/SimpleClock';

const App: React.FC = () => {
  return (
    <div className="App">
      <SimpleClock />
    </div>
  );
}

export default App;
