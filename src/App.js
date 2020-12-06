import logo from './logo.svg';
import React, { useState } from 'react';
import InsertionSort from './algorithms/InsertionSort';
import './App.css';
import Sorter from './components/Sorter';
import SortController from './components/SortController';
import { render } from '@testing-library/react';
import { useEffect } from 'react';


const App = () => {
  
  const [state, setState] = useState({array: [], trace: []});

  // componentDidMount() {
  //   this.generateRandomArray();
  // }

  useEffect(() => {
    createTrace();
  }, [state.array]);
  useEffect(() => {
    generateRandomArray();
  }, []);

  const generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(10)
      .fill(0)
      .map(() => getRandomInt(10 * 5));

    setState({array,trace: []});
  };

  const createTrace = () => {
    const numbers = [...state.array];
    const sort = InsertionSort;
    if (sort) {
      const trace = sort(numbers);
      setState({ ...state, trace });
    }
  };
  return (
    <div className="App">
      {/* <Sorter numbers={this.state.array} trace={this.state.trace} /> */}
      <SortController array={state.array} trace={state.trace} />
    </div>
  );
};

export default App;
