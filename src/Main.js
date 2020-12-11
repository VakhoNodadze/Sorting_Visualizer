import React, { useState } from 'react';
import InsertionSort from './algorithms/InsertionSort';
import { ThemeProvider } from 'styled-components';
import { themes, light, dark } from './styled/themes';
import SortController from './components/SortController';
import GlobalStyle from './styled/global';
import Flex from './components/primitives/Flex';
import { useEffect } from 'react';


const Main = () => {
  
  const [state, setState] = useState({array: [], trale: []});
  const [theme, setTheme] = useState(light);
  const [background, setBackground] = useState(light.color.secondaryBG);

  useEffect(() => {
    createTrace();
  }, [state.array]);

  useEffect(() => {
    setBackground(theme.color.secondaryBG);
    console.log('_______________', theme);
  }, [theme]);

  useEffect(() => {
    generateRandomArray();
  }, []);


  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  };

  const changeTheme = () => {
    if(theme === light) {setTheme(dark);}
    if(theme === dark) {setTheme(light);}
  };

  const generateRandomArray = () => {
    const array = [];
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
    <ThemeProvider theme={themes[theme.type]}>
      <Flex direction="column" full style={{backgroundColor: background}}>
        <GlobalStyle />
        <SortController array={state.array} trale={state.trale} setTheme={changeTheme} />
      </Flex>
    </ThemeProvider>
  );
};

export default Main;
