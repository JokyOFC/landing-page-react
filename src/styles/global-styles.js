import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.family.secondaryFamily} ;
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p{
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul{
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.large};
  }

  a{
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table{
    width:100%;
    overflow-y: auto;
  }

`;
