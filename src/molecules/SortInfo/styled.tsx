import { styled } from 'styled/themes';

const Body = styled.div `
    display: flex;
    flex-flow: row wrap;
    @media (max-width: 800px){
      flex-direction: column;
      width: 100%;
  }
`;

const Article = styled.div `
    width: 50%;
    line-height: 1.3;
    @media (max-width: 800px){
        width: 100%;
    }
    @media (min-width: 1200px) {
        width: 55%;
        padding-right: 5ch;
    }
`;

const Aside = styled.aside `
    marign-top: 3rem;
    @media (min-width: 1200px) {
        padding-left: 5ch;
    }
    @media (min-width: 992px) {
        padding-left: 2ch;
    }
`;

const Code = styled.code `
    padding:-left: 1rem;
    font-weight: bold;
`;

export { Body, Article, Aside, Code };