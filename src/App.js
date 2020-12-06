import logo from './logo.svg';
import React, { Component } from 'react';
import InsertionSort from './algorithms/InsertionSort';
import './App.css';
import Sorter from './components/Sorter';
import SortController from './components/SortController';
import { render } from '@testing-library/react';


class App extends Component {
  
  state = {
    array: [],
    trace: []
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(10)
      .fill(0)
      .map(() => getRandomInt(10 * 5));

    this.setState(
      {
        array,
        trace: []
      },
      this.createTrace
    );
    this.createTrace();
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = InsertionSort;
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  render(){
    return (
      <div className="App">
        {/* <Sorter numbers={this.state.array} trace={this.state.trace} /> */}
        <SortController array={this.state.array} trace={this.state.trace} />
      </div>
    );
  }
}

export default App;
