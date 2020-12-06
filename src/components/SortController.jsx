import React, { useState, useEffect, useReducer } from 'react';
import Sorter from './Sorter';
import './style.css';

const initialState = {
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

const stateReducer = (state, action) => {
  const { type, payload } = action;
  switch(type){
  case 'reset':
    return {
      ...state,
      array,
      trace: [],
      traceStep: -1,
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: [],
      originalArray: [...payload]
    };
  case 'clear-timeouts':
    timeoutIds.forEach((timeoutId) =>
      clearTimeout(timeoutId)
    );
    return {
      ...state,
      timeoutIds: []
    };
  case 'visual-state':
    return {
      ...state,
      array: payload.array,
      groupA: payload.groupA,
      groupB: payload.groupB,
      groupC: payload.groupC,
      groupD: payload.groupD,
      sortedIndices: payload.sortedIndices
    };
  case 'run':
    const timeoutIds = [];
    const timer = 250 / state.playbackSpeed;
    state.trace.forEach((item, i) => {
      let timeoutId = setTimeout(
        state.traceStep = state.traceStep + 1,
        state.array = item.array,
        state.groupA = item.groupA,
        state.groupB = item.groupB,
        state.groupC = item.groupC,
        state.groupD = item.groupD,
        state.sortedIndices = item.sortedIndices,
        i * timer,
        item
      );
        
      timeoutIds.push(timeoutId);
    });

    // Clear timeouts upon completion
    let timeoutId = setTimeout(
      state.timeoutIds.forEach((timeoutId) =>
        clearTimeout(timeoutId)
      ),
      state.timeoutIds = [],
      state.trace.length * timer
    );
    timeoutIds.push(timeoutId);
    return {
      ...state,
      timeoutIds
    };
  default:
    console.log('something went wrong');
    break;
  }
  return state;
};

const SortController = ({numbers, trace}) => {

  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    state.array = numbers;
    state.trace = trace;
  }, [numbers, trace]);

  useEffect(() => {
    dispatch({type: 'change-visual'});
  }, [state.traceStep]);


  return (
    <div className="SortController">
      <Sorter
        numbers={state.array}
        maxNum={Math.max(...state.array)}
        groupA={state.groupA}
        groupB={state.groupB}
        groupC={state.groupC}
        groupD={state.groupD}
        sortedIndices={state.sortedIndices}
      />
      <button onClick={() => dispatch({type: 'run', payload: state.trace})}>Sort bliad</button>
    </div>
  );
};

export default SortController;
