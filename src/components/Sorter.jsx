import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { randomFromInterval } from '../helpers/utils';
import Bar from './primitives/Bar';
import {quickSort} from '../algorithms/quicksort';

const Sorter = () => {
  const [array, setArray ] = useState([]);
    
  useEffect(() => {
    generateRandomArray();
  }, []);

  // createBars = (barSizes, sortType, sortObj) => {
  //   let iteration, selectedIteration;
  //   if (sortObj) {
  //     iteration = sortObj.iteration;
  //     selectedIteration = sortObj.selectedIteration;
  //   }
  //   let elementbars = [];
  //   for (let i = 0; i < barSizes.length; i++) {
  //     let color = "#9e9e9e";
  //     if (sortType === "selection") {
  //       if (i < iteration) {
  //         color = "#5580af";
  //       }
  //       if (i == selectedIteration) {
  //         color = "#5f5f5f";
  //       }
  //     } else if (sortType === "bubble" && i >= (barSizes.length - iteration)) {
  //       color = "#5580af";
  //     } else if (sortType === "quick") {
  //       if (sortObj.pivoti === i) {
  //         color = "#5f5f5f";
  //       }
  //       if (sortObj.pivotj === i) {
  //         color = "#5f5f5f";
  //       }
  //       if (sortObj.pivots && sortObj.pivots.length > 0 && sortObj.pivots.indexOf(i) !== -1) {
  //         color = "#5580af";
  //       }
  //     } 
  //     elementbars.push(<Bar key={i} size={barSizes[i]}  total={barSizes.length} color={color} />);
  //   }
  //   return elementbars;
  // }

  const doSort = () => {
    const sortedArray = quickSort(array, 0, array.length - 1);
    console.log('sortedArrray:', sortedArray);
    setArray([...sortedArray]);
  };

  const generateRandomArray = () => {
    let newArray = [];
    for(let i = 0; i < 100; i++){
      newArray.push(randomFromInterval(2, 100));
    }
    setArray(newArray);
  };

  return (
    <div style={{display: 'flex', alignItems: 'baseline'}}>
      {console.log(array)}
      {
        array.map((item, index) => (
          <Bar key={index} size={item} total={10} color="blue" />
        ))
      }
      <button onClick={() => doSort()}>Sort</button>
      <button onClick={() => generateRandomArray()}>Reset</button>
    </div>
  );
};

export default Sorter;

