import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: ${(props) => props.theme.fontFamily.default};
    font-size: ${(props) => props.theme.fontSize.default};
    color: ${(props) => props.theme.color.text};
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${(props) => props.theme.fontFamily.bold};
  }

  small {
    line-height: 1;
  }

  ol {
    padding: 0 1.2rem;
  }

  .intrro-modal {
    .content {
      font-family: ${(props) => props.theme.fontFamily.default};
      color: ${(props) => props.theme.color.text};

      ul {
        margin: 0 1.2rem;
        padding: 0;
      }

      h3 {
        font-size: 14px;
      }

    }
  }



  .DraftEditor-root {
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: 0 0 ${(props) => props.theme.borderRadius.default} ${(props) => props.theme.borderRadius.default};
    padding: 1em;

    .public-DraftEditorPlaceholder-root {
      position: absolute;
      z-index: -1;
      color: ${(props) => props.theme.color.placeholder};

      &.public-DraftEditorPlaceholder-hasFocus {
        color: transparent;
      }
    }

    .DraftEditor-editorContainer {
      .public-DraftEditor-content {
        min-height: 100px;
      }
    }
  }

`;

export default GlobalStyle;
