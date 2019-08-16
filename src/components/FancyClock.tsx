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
  }

  componentWillUnmount() {}

  setDate() {
    const date = new Date();
  }

  render() {
    const { secondsDegrees, hoursDegrees, minsDegrees } = this.state;

    return (
      <div className={styles.clock}>
        <div className={styles.clockFace}>
          <div className={styles.clockHand + " hour-hand"} />
          <div className={styles.clockHand + " min-hand"} />
          <div className={styles.clockHand + " second-hand"} />
        </div>
      </div>
    );
  }
}

export default FancyClock;
