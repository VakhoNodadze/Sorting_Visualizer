import React, { Component } from 'react';
import './style.css';

// Sub components
import Sorter from './Sorter';

class SortVisualizer extends Component {
  state = {
    trace: [],
    traceStep: -1,

    originalArray: [],
    array: [],
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
    sortedIndices: [],

    timeoutIds: [],
    playbackSpeed: 1
  };

  componentDidUpdate(prevProps) {
    if (prevProps.array !== this.props.array) {
      this._reset(this.props.array);
    }
    if (prevProps.trace !== this.props.trace) {
      this.clearTimeouts();
      this.setState({ trace: this.props.trace });
    }
  }

  // Actions

  _reset = (array) => {
    this.setState({
      array,
      trace: [],
      traceStep: -1,
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: [],
      originalArray: [...array]
    });
  };

  clearTimeouts = () => {
    this.state.timeoutIds.forEach((timeoutId) =>
      clearTimeout(timeoutId)
    );
    this.setState({ timeoutIds: [] });
  };

  _changeVisualState = (visualState) => {
    this.setState({
      array: visualState.array,
      groupA: visualState.groupA,
      groupB: visualState.groupB,
      groupC: visualState.groupC,
      groupD: visualState.groupD,
      sortedIndices: visualState.sortedIndices
    });
  };

  run = (trace) => {
    const timeoutIds = [];
    const timer = 250 / this.state.playbackSpeed;
    console.log('ITEEEM', trace),

    // Set a timeout for each item in the trace
    trace.forEach((item, i) => {
      let timeoutId = setTimeout(
        (item) => {
          this.setState(
            (prevState) => ({
              traceStep: prevState.traceStep + 1
            }),
            this._changeVisualState(item)
          );
        },
        i * timer,
        item
      );

      timeoutIds.push(timeoutId);
    });

    // Clear timeouts upon completion
    let timeoutId = setTimeout(
      this.clearTimeouts,
      trace.length * timer
    );
    timeoutIds.push(timeoutId);

    this.setState({ timeoutIds });
  };

  pause = () => {
    this.clearTimeouts();
  };

  continue = () => {
    const trace = this.state.trace.slice(this.state.traceStep);
    this.run(trace);
  };

  stepForward = () => {
    const trace = this.state.trace;
    const step = this.state.traceStep;
    if (step < trace.length - 1) {
      const item = trace[step + 1];
      this.setState(
        { traceStep: step + 1 },
        this._changeVisualState(item)
      );
    }
  };

  stepBackward = () => {
    const trace = this.state.trace;
    const step = this.state.traceStep;
    if (step > 0) {
      const item = trace[step - 1];
      this.setState(
        { traceStep: step - 1 },
        this._changeVisualState(item)
      );
    }
  };

  repeat = () => {
    this.clearTimeouts();
    this.setState((prevState) => ({
      array: [...prevState.originalArray],
      traceStep: -1,
      comparing: [],
      compared: [],
      sorted: []
    }));
    this.run(this.state.trace);
  };

  adjustPlaybackSpeed = (speed) => {
    const playing = this.state.timeoutIds.length > 0;
    this.pause();
    const playbackSpeed = Number(speed.split('x')[0]);
    this.setState({ playbackSpeed }, () => {
      if (playing) {this.continue();}
    });
  };

  render() {
    return (
      <div className="SortVisualizer">
        <Sorter
          numbers={this.state.array}
          maxNum={Math.max(...this.state.array)}
          groupA={this.state.groupA}
          groupB={this.state.groupB}
          groupC={this.state.groupC}
          groupD={this.state.groupD}
          sortedIndices={this.state.sortedIndices}
        />
        <button onClick={this.run.bind(this, this.state.trace)}>Sort it!</button>
      </div>
    );
  }
}

export default SortVisualizer;
