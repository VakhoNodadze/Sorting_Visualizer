import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './themes';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${(props: ThemeProps) => props.theme.fonts.regular};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.body};
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.body};;
    color: ${(props: ThemeProps) => props.theme.colors.gray400};
    margin: 0;
    padding: 0;
  }

  input,
  button,
  textarea,
  select {

    &:focus {
      outline: 0;
    }
  }
  p {
    margin: 0;
  }
  h1,h2,h3,h4,h5{
    margin: 0;
  }

  input, textarea {
    font-family: ${(props: ThemeProps) => props.theme.fonts.regular};
  }

  a {
    text-decoration: none;

    &:hover {
      color: #000;
    }

    &.active {
      color: ${(props: ThemeProps) => props.theme.colors.pink};
    }
  }


`;

export default GlobalStyle;
