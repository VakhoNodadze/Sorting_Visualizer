import React, { FC, useState, createContext } from 'react';
import InsertionSort, { 
  InsertionSortKey,
  InsertionSortDesc } 
  from './algorithms/InsertionSort';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, ThemeProps } from './styled/themes';
import SortController from './components/SortController';
import GlobalStyle from './styled/global';
import Flex from './components/primitives/Flex';
import { useEffect } from 'react';
import { Trale } from './helpers/utils';

const ALGORITHM = {
  'Insertion Sort': InsertionSort
};

const ALGORITHM_KEY = {
  'Insertion Sort': InsertionSortKey
};

const ALGORITHM_DESC = {
  'Insertion Sort': InsertionSortDesc
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
};

export const StateContext = createContext<ContextProps>(
  {algorithm: 'Insertion Sort', array: [], trale: [], description: null, colors: null, changeAlgorithm: null}
);

const Main: FC = () => {
  
  const [state, setState] = useState<State> ({array: [], trale: []});
  const [theme, setTheme] = useState(lightTheme);
  const [background, setBackground] = useState(theme.themeColors.primaryBg);
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


  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  };

  const changeTheme = () => {
    if(theme === lightTheme) {setTheme(darkTheme);}
    if(theme === darkTheme) {setTheme(lightTheme);}
  };

  const generateRandomArray = () => {
    const array = [];
    console.log('new');
    for(let i = 0; i < 10; i++){
      array.push(getRandomInt(70));
    }

    setState({array,trale: []});
  };

  const createTrace = () => {
    const numbers = [...state.array];
    const trale = InsertionSort(numbers);
    setState({ ...state, trale });
  };


  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider 
        value={{algorithm: 'Insertion Sort', array: state.array, trale: state.trale, 
          changeAlgorithm: setAlgorithm,
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
