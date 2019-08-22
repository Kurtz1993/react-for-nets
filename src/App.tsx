import React from 'react';
import logo from './logo.svg';
import './App.scss';
import FancyClock from './components/FancyClock';

const App: React.FC = () => {
  return (
    <div className="App">
      <FancyClock />
    </div>
  );
}

export default App;
