import React, { FC, useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import 'styled/styles.css';
import InsertionSort, { 
  InsertionSortKey,
  InsertionSortDesc } 
  from './algorithms/InsertionSort';
import QuickSort, { 
  QuickSortKey,
  QuickSortDesc } 
  from './algorithms/QuickSort';
import BubbleSort, { 
  BubbleSortKey,
  BubbleSortDesc } 
  from './algorithms/BubbleSort';
import MergeSort, { 
  MergeSortKey,
  MergeSortDesc } 
  from './algorithms/MergeSort';

import { lightTheme, darkTheme, ThemeProps } from './styled/themes';
import SortController from './components/SortController';
import GlobalStyle from './styled/global';
import Flex from './components/primitives/Flex';
import { useEffect } from 'react';
import { Trale } from './helpers/utils';

const ALGORITHM = {
  'Insertion Sort': InsertionSort,
  'Quick Sort': QuickSort,
  'Bubble Sort': BubbleSort,
  'Merge Sort': MergeSort
};

const ALGORITHM_KEY = {
  'Insertion Sort': InsertionSortKey,
  'Bubble Sort': BubbleSortKey,
  'Quick Sort': QuickSortKey,
  'Merge Sort': MergeSortKey
};

const ALGORITHM_DESC = {
  'Insertion Sort': InsertionSortDesc,
  'Bubble Sort': BubbleSortDesc,
  'Quick Sort': QuickSortDesc,
  'Merge Sort': MergeSortDesc
};
interface State {
  array: number[];
  trale: Trale[];
}


interface ContextProps {
  algorithm: keyof typeof ALGORITHM;
  array: number[];
  trale: Trale[];
  description: any;
  colors: any;
  changeAlgorithm: any;
  barNumber: number;
  handleBarChange: any;
  theme: string;
};

export const StateContext = createContext<ContextProps>(
  {algorithm: 'Insertion Sort', array: [], trale: [], description: null, colors: null, changeAlgorithm: null,
    barNumber: 10, handleBarChange: null, theme: lightTheme.mode}
);

const Main: FC = () => {

  const [theme, setTheme] = useState(lightTheme);
  
  const [state, setState] = useState<State> ({array: [], trale: []});
  const [background, setBackground] = useState(theme.themeColors.primaryBg);
  const [barNumber, setBarNumber] = useState(10);
  const [algorithm, setAlgorithm] = useState<keyof typeof ALGORITHM>('Insertion Sort');

  
  useEffect(() => {
    createTrace();
  }, [state.array]);

  useEffect(() => {
    setBackground(theme.themeColors.primaryBg);
  }, [theme]);

  useEffect(() => {
    generateRandomArray();
  }, []);
  
  useEffect(() => {
    generateRandomArray();
  }, [barNumber]);
  
  useEffect(() => {
    generateRandomArray();
  }, [algorithm]);
  

  const handleBarChange = (num: number) => {
    setBarNumber(num);
  };

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const changeTheme = () => {
    if(theme === lightTheme) {setTheme(darkTheme);}
    if(theme === darkTheme) {setTheme(lightTheme);}
  };

  const generateRandomArray = () => {
    const array = [];
    for(let i = 0; i < barNumber; i++){
      array.push(getRandomInt(5, 100));
    }

    setState({array,trale: []});
  };

  const createTrace = () => {
    const numbers = [...state.array];
    const trale = ALGORITHM[algorithm](numbers);
    setState({ ...state, trale });
  };


  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider 
        value={{algorithm: 'Insertion Sort', array: state.array, trale: state.trale, 
          changeAlgorithm: setAlgorithm, barNumber, handleBarChange, theme: theme.mode,
          description: ALGORITHM_DESC[algorithm], colors: ALGORITHM_KEY[algorithm]}}>
        <Flex direction="column" full style={{backgroundColor: background, padding: 30}}>
          <GlobalStyle />
          <SortController 
            array={state.array} generateNewArray={generateRandomArray} trale={state.trale} setTheme={changeTheme} />
        </Flex>
      </StateContext.Provider>
    </ThemeProvider>
  );
};

export default Main;
