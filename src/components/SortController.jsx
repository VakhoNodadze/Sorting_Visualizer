import React, { Component } from 'react';
import './style.css';

// Sub components
import Sorter from './Sorter';
import Button from './primitives/Button';

class SortVisualizer extends Component {
  constructor(props){
    super(props);
    this.state = {
      trale: [],
      traleStep: -1,
  
      originalArray: [],
      array: [],
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: [],
      sorting: false,
  
      playbackSpeed: 1
    };
    this.run = this.run.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.array !== this.props.array) {
      this.randomizeArray(this.props.array);
    }
    if (prevProps.trale !== this.props.trale) {
      this.setState({ trale: this.props.trale });
    }
  }

  randomizeArray = (array) => {
    this.setState({
      array,
      trale: [],
      traleStep: -1,
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: [],
      originalArray: [...array]
    });
  };


  animate = (visualState) => {
    const { array, groupA, groupB, groupC, groupD, sortedIndices, sorting } = visualState;
    this.setState({
      array: array,
      groupA: groupA,
      groupB: groupB,
      groupC: groupC,
      groupD: groupD,
      sortedIndices: sortedIndices,
      sorting: sorting
    });
  };

  run = (trale) => {
    const timer = 250 / this.state.playbackSpeed;
    this.setState(
      {sorting: true},
      trale.forEach((item, i) => {
        setTimeout(
          (item) => {
            this.setState(
              (prevState) => ({
                traleStep: prevState.traleStep + 1
              }),
              this.animate(item)
            );
          },
          i * timer,
          item
        );
      })
    );

    
  };

  pause = () => {
    this.setState({sorting: false});
  };

  continue = () => {
    const trale = this.state.trale.slice(this.state.traleStep);
    this.run(trale);
  };

  stepNext = () => {
    const trale = this.state.trale;
    const step = this.state.traleStep;
    if (step < trale.length - 1) {
      const item = trale[step + 1];
      this.setState(
        { traleStep: step + 1 },
        this.animate(item)
      );
    }
  };

  stepBackward = () => {
    const trale = this.state.trale;
    const step = this.state.traleStep;
    if (step > 0) {
      const item = trale[step - 1];
      this.setState(
        { traleStep: step - 1 },
        this.animate(item)
      );
    }
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
    const { array, groupA, groupB, groupC, groupD, sortedIndices,sorting, trale } = this.state;
    return (
      <div className="SortVisualizer">
        <Sorter
          numbers={array}
          maxNum={Math.max(...array)}
          groupA={groupA}
          groupB={groupB}
          groupC={groupC}
          groupD={groupD}
          sortedIndices={sortedIndices}
        />
        <Button 
          onClick={ sorting ? () => this.pause() : () => this.run(trale) }> {sorting ? 'Stop!' : 'Sort it!!'}</Button>
      </div>
    );
  }
}

export default SortVisualizer;
