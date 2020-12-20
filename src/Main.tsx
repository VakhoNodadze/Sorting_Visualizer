import React, { FC, useState, createContext } from 'react';
import InsertionSort from './algorithms/InsertionSort';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, ThemeProps } from './styled/themes';
import SortController from './components/SortController';
import GlobalStyle from './styled/global';
import Flex from './components/primitives/Flex';
import { useEffect } from 'react';
import { Trale } from './helpers/utils';

interface State {
  array: number[];
  trale: Trale[];
}

export const StateContext = createContext({user: {}});

const Main: FC = () => {
  
  const [state, setState] = useState<State> ({array: [], trale: []});
  const [theme, setTheme] = useState(lightTheme);
  const [background, setBackground] = useState(theme.themeColors.primaryBg);

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
      <Flex direction="column" full style={{backgroundColor: background}}>
        <GlobalStyle />
        <SortController 
          array={state.array} generateNewArray={generateRandomArray} trale={state.trale} setTheme={changeTheme} />
      </Flex>
    </ThemeProvider>
  );
};

export default Main;
