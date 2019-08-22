import React, { Component } from "react";

class SimpleClock extends Component<any, { date: Date }> {
  state = {
    date: new Date(),
  };

  constructor(props: any) {
    super(props);

    window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

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
