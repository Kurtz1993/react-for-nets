import React, { Component } from "react";
import styles from "./FancyClock.module.scss";

interface FancyClockState {
  hoursDegrees: string;
  secondsDegrees: string;
  minsDegrees: string;
}

class FancyClock extends Component<any, FancyClockState> {
  secondHand = React.createRef<HTMLDivElement>();
  minsHand = React.createRef<HTMLDivElement>();
  hourHand = React.createRef<HTMLDivElement>();
  secondsInterval: number | null = null;

  state = {
    hoursDegrees: "90deg",
    secondsDegrees: "90deg",
    minsDegrees: "90deg",
  };

  componentDidMount() {
    this.setDate();

    this.secondsInterval = window.setInterval(this.setDate.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.secondsInterval as number);
  }

  setDate() {
    const date = new Date();

    const hour = date.getHours();
    const mins = date.getMinutes();
    const seconds = date.getSeconds();
    // Calculate the position of the hands, in degrees.
    const hourdeg = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    const minsdeg = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    const secondsdeg = (seconds / 60) * 360 + 90;
    // Use those degrees as a CSS prop.
    const hoursDegrees = `rotate(${hourdeg}deg)`;
    const minsDegrees = `rotate(${minsdeg}deg)`;
    const secondsDegrees = `rotate(${secondsdeg}deg)`;

    this.setState({ hoursDegrees, minsDegrees, secondsDegrees });
  }

  render() {
    const { secondsDegrees, hoursDegrees, minsDegrees } = this.state;

    return (
      <div className={styles.clock}>
        <div className={styles.clockFace}>
          <div
            style={{ transform: hoursDegrees }}
            className={styles.clockHand + " hour-hand"}
            ref={this.hourHand}
          />
          <div
            style={{ transform: minsDegrees }}
            className={styles.clockHand + " min-hand"}
            ref={this.minsHand}
          />
          <div
            style={{ transform: secondsDegrees }}
            className={styles.clockHand + " second-hand"}
            ref={this.secondHand}
          />
        </div>
      </div>
    );
  }
}

export default FancyClock;
