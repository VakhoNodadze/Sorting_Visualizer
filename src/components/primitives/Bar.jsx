import React from 'react';
import styled from 'styled-components';

const Slider = ({size, total, color}) => {    
  return (
  // <div className={"bars"} style={ { height: 10*size+5 , width: 1000/total, marginLeft: 100/total, marginRight: 100/total, backgroundColor: color} }>
  // </div>
    <Container total={total} size={size} color={color}>
      <div />
    </Container>
  );
};

export default Slider;

const Container = styled.div`
    margin: 10px ${(props) => 10 / props.total}px;
    height: ${(props) => 10 * props.size + 5}px;
    width: ${(props) => 1000 / props.total}px;
    background-color: ${(props) => props.color};
`;