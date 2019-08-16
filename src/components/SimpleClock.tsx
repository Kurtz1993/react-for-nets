import React from 'react';

interface SimpleClockState {
  date: Date;
}

class SimpleClock extends React.Component<any, SimpleClockState> {
  state = {
    date: new Date()
  };

  render() {
    return (
      <div>
        <h1>I'm a simple clock</h1>
        <p>Time now is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default SimpleClock;
