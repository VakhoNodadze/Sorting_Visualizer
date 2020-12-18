import styled, { css } from 'styled-components';

interface Props {
  inline?: string;
  direction?: string;
  wrap?: string;
  justify?: string;
  alignContent?: string;
  align?: string;
  full?: boolean;
  center?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  padding?: any;
  flex?: string;
  position?: string;
  hide?: boolean;
}

const Flex = styled.div<Props>`
  display: flex;
  align-content: stretch;
  transition: all 0.3s, opacity 0.5s ease;
  opacity: 1;
  visibility: visible;
  position: relative;
  ${(props) => props.inline
    && css`
      display: inline-flex;
    `};
  ${(props) => props.direction
    && css`
      flex-direction: ${props.direction};
    `};
  ${(props) => props.wrap
    && css`
      flex-wrap: ${props.wrap};
    `};
  ${(props) => props.justify
    && css`
      justify-content: ${props.justify};
    `};
  ${(props) => props.alignContent
    && css`
      align-content: ${props.alignContent};
    `};
  ${(props) => props.align
    && css`
      align-items: ${props.align};
    `};
  ${(props) => props.full
    && css`
      width: 100%;
      height: 100vh;
      flex-basis: 100%;
    `};
  ${(props) => props.center
    && css`
      align-items: center;
      justify-content: center;
    `};
  ${(props) => props.width
    && css`
      width: ${props.width};
    `};
  ${(props) => props.height
    && css`
      height: ${props.height};
    `};
  ${(props) => props.padding
    && css`
      padding: ${props.padding};
    `};
  ${(props) => props.margin
    && css`
      margin: ${props.margin};
    `};
  ${(props) => props.flex
    && css`
      flex: ${props.flex};
    `};
  ${(props) => props.position === 'absolute'
    && css`
      position: ${props.position};
      top: 0;
      left: 0;
    `};
  ${(props) => props.hide
    && css`
      opacity: 0;
      visibility: hidden;
    `};
`;

export default Flex;