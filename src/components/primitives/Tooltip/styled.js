import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTip = styled.div`
  position: absolute;
  max-width: 300px;
  min-width: 100px;
  z-index: 100;
  height: 300px;
  transition: all 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: transparent;

  transform: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'scale(1)';
    default:
      return 'scale(0.62)';
    }
  }};

  opacity: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return '1';
    default:
      return '0';
    }
  }};

  transition: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'all 0.1s ease-in-out';
    case 'out':
      return 'all 0.1s ease-in-out';
    default:
      return '';
    }
  }};

  ${(props) => {
    switch (props.position) {
    case 'top right':
      return css`
          top: ${props.dimensions.top - props.dimensions.height - 296}px;
          left: ${props.dimensions.right - 2}px;
          margin-left: -200px;
        `;
    case 'top center':
      return css`
          top: ${props.dimensions.top - props.dimensions.height - 296}px;
          left: ${props.dimensions.left + props.dimensions.width / 2}px;
          transform: translateX(-100px);
          width: 200px;
        `;
    default:
      // top left
      return css`
          top: ${props.dimensions.top - props.dimensions.height - 296}px;
          left: ${props.dimensions.left + 2}px;
        `;
    }
  }};
`;

const StyledTipContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  font-size: 12px;
  color: #686868;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;

  ${(props) => {
    switch (props.position) {
    case 'top right':
      return css`
          border-bottom-right-radius: 0;
        `;
    case 'top center':
      return css`
          text-align: center;
        `;
    default:
      // top left
      return css`
          border-bottom-left-radius: 0;
        `;
    }
  }};

  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    bottom: -11px;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.3));
    overflow: hidden;
    width: 0;
    height: 0;

    ${(props) => {
    switch (props.position) {
    case 'top right':
      return css`
            right: 0;
            border-top: 12px solid #fff;
            border-left: 14px solid transparent;
          `;
    case 'top center':
      return css`
            left: calc(50% - 12px);
            border-top: 12px solid #fff;
            border-left: 14px solid transparent;
            border-right: 14px solid transparent;
          `;
    default:
      // top left
      return css`
            left: 0;
            border-top: 12px solid #fff;
            border-right: 14px solid transparent;
          `;
    }
  }};
  }
`;

const StyledContent = styled.div``;

export {
  StyledContainer, StyledContent, StyledTip, StyledTipContent
};
