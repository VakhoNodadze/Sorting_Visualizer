import React, { Component } from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';
// Sub components
import Sorter from './Sorter';
import SortInfo from './SortInfo';
import ColorsInfo from './Colors';
import ProgressBar from 'components/ProgressBar';
import { StateContext } from 'Main';
import { ThemeProps } from 'styled/themes';
import { Trale } from 'helpers/utils';
import Flex from 'components/primitives/Flex';
import { IconItem } from 'components/primitives/Icons';

interface Props extends ThemeProps{
  array: number[];
  trale: Trale[];
  setTheme: Function;
  generateNewArray: () => void;
}

interface State {
  trale: Trale[];
  traleStep: number;
  sortedIndices: number[];
  originalArray: number[];
  array: number[];
  groupA: number[];
  groupB: number[];
  groupC: number[];
  groupD: number[];
  playbackSpeed: number;
  timeouts: number[];
  timeoutIds: number[];
}

class SortController extends Component<Props, State> {
  constructor(props: Props){
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
      timeouts: [],
      timeoutIds: []
    };
    this.run = this.run.bind(this);
    this.continue = this.continue.bind(this);
  }


  componentDidUpdate(prevProps: Props) {
    if (prevProps.array !== this.props.array) {
      this.randomizeArray(this.props.array);
    }
    if (prevProps.trale !== this.props.trale) {
      this.setState({ trale: this.props.trale });
    }
  }

  randomizeArray = (array: number[]) => {
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


  animate = (currentState: Trale): (() => void) | undefined => {
    const { array, groupA, groupB, groupC, groupD, sortedIndices } = currentState;
    this.setState({
      array: array,
      groupA: groupA,
      groupB: groupB,
      groupC: groupC,
      groupD: groupD,
      sortedIndices: sortedIndices
    });
    return undefined;
  };

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) =>
      clearTimeout(timeout)
    );
    this.setState({ timeouts: [] });
  };

  run = (trale: Trale[]) => {
    const timer = 250 / this.state.playbackSpeed;
    trale.forEach((item, i) => {
      let timeout = setTimeout(
        (item: Trale) => {
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

  adjustPlaybackSpeed = (speed: string) => {
    const playing = this.state.timeoutIds.length > 0;
    this.pause();
    const playbackSpeed = Number(speed.split('x')[0]);
    this.setState({ playbackSpeed }, () => {
      if (playing) {this.continue();}
    });
  };

  handleClick = () => {
    const { timeouts, trale, traleStep } = this.state;
    if (timeouts.length > 0){
      return this.pause();
    }
    if(traleStep > -1) {
      return this.continue();
    }
    return this.run(trale);
  }



  render() {
    const { array, groupA, groupB, groupC, groupD, sortedIndices, timeouts, trale, traleStep } = this.state;
    const { theme, setTheme, generateNewArray } = this.props;
    const sorting = timeouts.length > 0;
    return (
      <StateContext.Consumer>
        {
          (context) => 
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
              <ProgressBar
                width={
                  trale.length > 0 && traleStep > 0
                    ? (traleStep /
                        (trale.length - 1)) *
                      100
                    : 0
                }
              />
              <Flex justify="between">
                <IconItem name="Backwards" theme={theme} />
                {
                  sorting ? <IconItem name="Pause" theme={theme} onClick={() => this.handleClick()} /> 
                    : <IconItem name="Play" theme={theme} onClick={() => this.handleClick()} />
                }
                <IconItem name="Forwards" theme={theme} />
              </Flex>
              <button onClick={() => generateNewArray()}>New Array</button>
              <button onClick={() => setTheme()} 
                style={{position: 'absolute', top: 0, right: 0, margin: '1.5rem'}}>
            Change theme
              </button>
              <ColorsInfo {...context.colors} />
              <SortInfo {...context.description} />
            </Container>
        }
      </StateContext.Consumer>
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