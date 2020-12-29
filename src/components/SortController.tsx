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
import Button from 'components/primitives/Button';
import Select from 'components/primitives/Select';
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
}

const BAR_NUMBERSS = [
  {label: '10', value: 10},
  {label: '25', value: 25},
  {label: '50', value: 50},
  {label: '75', value: 75},
  {label: '100', value: 100}
];

const SPEED = [
  {label: 'x0.25', value: 0.25},
  {label: 'x0.5', value: 0.5},
  {label: 'x1', value: 1},
  {label: 'x2', value: 2},
  {label: 'x4', value: 4},
  {label: 'x10', value: 10}
];

const ALGORITHMS = [
  {label: 'Insertion Sort', value: 'Insertion Sort'},
  {label: 'Quick Sort', value: 'Quick Sort'}
];

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
      timeouts: []
    };
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

  stepForward = () => {
    const trale = this.state.trale;
    const step = this.state.traleStep;
    const timeouts = this.state.timeouts;
    if (step < trale.length - 1 && !(timeouts.length > 0)) {
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
    const timeouts = this.state.timeouts;
    if (step > 0 && !(timeouts.length > 0)) {
      const item = trale[step - 1];
      this.setState(
        { traleStep: step - 1 },
        this.animate(item)
      );
    }
  };

  handleSpeedChange = (playbackSpeed: number) => {
    const sorting = this.state.timeouts.length > 0;
    this.pause();
    this.setState({ playbackSpeed }, () => {
      if (sorting) {this.continue();}
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
    const sorting = timeouts.length > 0 && traleStep < trale.length;
    const startedProgress = trale.length > 0 && traleStep > 0;
    const moveForwardDisabled = traleStep >= trale.length - 1 || sorting;
    const moveBackwardDisabled = traleStep <= 0 || sorting;
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
                  startedProgress
                    ? (traleStep /
                        (trale.length - 1)) *
                      100
                    : 0
                }
              />
              <Flex justify="between">
                <IconItem disabled={moveBackwardDisabled} name="Backwards" theme={theme} 
                  onClick={() => this.stepBackward()} />
                <IconItem name={sorting ? 'Pause' : 'Play'} theme={theme} onClick={() => this.handleClick()} /> 
                <IconItem disabled={moveForwardDisabled} name="Forwards" theme={theme} 
                  onClick={this.stepForward} />
              </Flex>
              <div style={{display: 'flex'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <p />
                  <Button fluid size="default" fontSize="body" borderRadius="default" 
                    onClick={() => generateNewArray()} style={{marginRight: '2rem'}}>New Array</Button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginRight: '2rem', alignItems: 'center'}}>
                  <p>Choose Sorting Algorithm</p>
                  <Select options={ALGORITHMS} 
                    onChange={(e: any) => context.changeAlgorithm((e.target.value))} 
                    width="8rem" defaultValue={context.barNumber} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginRight: '2rem', alignItems: 'center'}}>
                  <p>Choose Bar Numbers</p>
                  <Select options={BAR_NUMBERSS} 
                    onChange={(e: any) => context.handleBarChange(Number(e.target.value))} 
                    width="5rem" defaultValue={context.barNumber} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <p>Choose Sorting Speed</p>
                  <Select options={SPEED} 
                    onChange={(e: any) => this.handleSpeedChange(Number(e.target.value))} 
                    width="5rem" defaultValue={this.state.playbackSpeed} />
                </div>
              </div>
              <Button fluid size="default" fontSize="body" borderRadius="rounded" onClick={() => setTheme()} 
                style={{position: 'absolute', top: 0, right: 0, margin: '1.5rem'}}>
            Dark Mode {context.theme === 'dark' ? 'On' : 'Off'}
              </Button>
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