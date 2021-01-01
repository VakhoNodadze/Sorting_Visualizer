import { css } from 'styled-components';
import { styled } from 'styled/themes';

const direction = {
  row: 'row',
  column: 'column'
};

const wrap = {
  wrap: 'wrap',
  noWrap: 'no-wrap'
};

const justify = {
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  start: 'flex-start',
  end: 'flex-end'
};

const alignContent = {
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  start: 'flex-start',
  end: 'flex-end'
};

const align = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end'
};

interface Props {
  inline?: string;
  direction?: keyof typeof direction;
  wrap?: keyof typeof wrap;
  justify?: keyof typeof justify;
  alignContent?: keyof typeof alignContent;
  align?: keyof typeof align;
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
      flex-direction: ${direction[props.direction]};
    `};
  ${(props) => props.wrap
    && css`
      flex-wrap: ${wrap[props.wrap]};
    `};
  ${(props) => props.justify
    && css`
      justify-content: ${justify[props.justify]};
    `};
  ${(props) => props.alignContent
    && css`
      align-content: ${alignContent[props.alignContent]};
    `};
  ${(props) => props.align
    && css`
      align-items: ${align[props.align]};
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