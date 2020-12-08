import React, { useState } from 'react';
import InsertionSort from './algorithms/InsertionSort';
import './App.css';
import SortController from './components/SortController';
import { useEffect } from 'react';


const App = () => {
  
  const [state, setState] = useState({array: [], trale: []});

  useEffect(() => {
    createTrace();
  }, [state.array]);
  useEffect(() => {
    generateRandomArray();
  }, []);


  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  };

  const generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    getRandomInt();
    // Generate an array of length max
    const array = Array(10)
      .fill(0)
      .map(() => getRandomInt(10 * 5));

    setState({array,trale: []});
  };

  const createTrace = () => {
    const numbers = [...state.array];
    const sort = InsertionSort;
    if (sort) {
      const trale = sort(numbers);
      setState({ ...state, trale });
    }
  };
  return (
    <div className="App">
      {/* <Sorter numbers={this.state.array} trale={this.state.trale} /> */}
      <SortController array={state.array} trale={state.trale} />
    </div>
  );
};

export default App;
