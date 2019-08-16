import React from "react";

class SimpleClock extends React.Component<any, { date: Date }> {
  state = {
    date: new Date(),
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
