import styled, { css } from 'styled-components';

const StyledContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.4px;
  width: ${(props) => (props.fluid ? '100%' : 'auto')};
  font-size: ${(props) => props.theme.fontSize[props.size]};
  padding: ${(props) => props.theme.paddingVertical[props.size]} ${(props) => props.theme.paddingHorizontal[props.size]};
  border-radius: ${(props) => props.theme.borderRadius[props.size]};

  ${(props) => {
    switch (props.variant) {
    case 'basic':
      return css`
          background: transparent;
          border-radius: 0;
          border: 0;
          color: ${props.theme.color[props.color]};
          padding: 0;
        `;
    case 'outlined':
      return css`
          background: transparent;
          border-radius: ${props.theme.borderRadius.default};
          border: solid 1px ${props.theme.color[props.color]};
          color: ${props.theme.color[props.color]};
        `;
    case 'contained':
      return css`
          background-color: ${props.theme.palette[props.color][1000]};
          border-radius: ${props.theme.borderRadius.default};
          border: 0;
          color: #fff;
        `;
    default:
      return css`
          background-color: ${props.active
    ? props.theme.palette[props.color][300]
    : props.theme.palette[props.color][200]};
          color: ${props.theme.palette[props.color][1000]};
          border: 0;
        `;
    }
  }};

  ${(props) => {
    switch (props.attached) {
    case 'bottom':
      return css`
          border: 0;
          border-top: ${props.isDisabled ? 0 : 'solid 0.5px rgba(0, 0, 0, 0.15)'};
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        `;
    default:
      return null;
    }
  }};

  ${(props) => props.isDisabled
    && css`
      opacity: 0.34;
      color: ${props.theme.color.default};
      background-color: ${props.theme.color.disabled};
      cursor: default !important;
    `};

  ${(props) => props.circular
    && css`
      border-radius: ${props.theme.borderRadius.rounded};
    `};

  &:focus,
  &:active {
    outline: 0;
    box-shadow: none;
  }
`;

const StyledContent = styled.div`
  padding: 20px;
`;

const StyledStartIcon = styled.div`
  margin-right: 8px;
  transition: transform 0.6s ease;

  transform: ${(props) => (props.active ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export { StyledContainer, StyledContent, StyledStartIcon };
