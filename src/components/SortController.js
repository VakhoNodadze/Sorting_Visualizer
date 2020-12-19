import React, { Component } from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';
// Sub components
import Sorter from './Sorter';
import { themes } from '../styled/themes';

class SortController extends Component {
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
  
      playbackSpeed: 1,
      timeouts: []
    };
    this.run = this.run.bind(this);
    this.continue = this.continue.bind(this);
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


  animate = (currentState) => {
    const { array, groupA, groupB, groupC, groupD, sortedIndices } = currentState;
    this.setState({
      array: array,
      groupA: groupA,
      groupB: groupB,
      groupC: groupC,
      groupD: groupD,
      sortedIndices: sortedIndices
    });
  };

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) =>
      clearTimeout(timeout)
    );
    console.log('clearing');
    this.setState({ timeouts: [] });
  };

  run = (trale) => {
    const timer = 250 / this.state.playbackSpeed;
    trale.forEach((item, i) => {
      let timeout = setTimeout(
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

      this.setState((prevState) => ({
        timeouts: [...prevState.timeouts, timeout]
      }));
    });
    
  };

  pause = () => {
    this.clearTimeouts();
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

  handleClick = () => {
    const { timeouts, trale, traceStep } = this.state;
    if (timeouts.length > 0){
      return this.pause();
    }
    if(traceStep > -1) {
      return this.continue();
    }
    return this.run(trale);
  }



  render() {
    const { array, groupA, groupB, groupC, groupD, sortedIndices, timeouts } = this.state;
    const { theme, setTheme } = this.props;
    const sorting = timeouts.length > 0;
    return (
      <Container>
        <Sorter
          numbers={array}
          maxNum={Math.max(...array)}
          groupA={groupA}
          groupB={groupB}
          groupC={groupC}
          groupD={groupD}
          sortedIndices={sortedIndices}
        />
        <button 
          variant="contained"
          color="primary"
          onClick={() => this.handleClick()}> 
          {sorting > 0 ? 'Stop!' : 'Sort it!!'}
        </button>
        <button onClick={() => setTheme()}>Change theme</button>
      </Container>
    );
  }
}

export default withTheme(SortController);

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;