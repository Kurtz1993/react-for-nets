import React, { Component } from "react";

class SimpleClock extends Component<any, { date: Date }> {
  state = {
    date: new Date(),
  };

  render() {
    return (
      // simplified version...
      <div>
        <h1>I'm a simple clock</h1>
        <p>Time now is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default SimpleClock;
