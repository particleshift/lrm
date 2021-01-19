import Styled, { createGlobalStyle } from "styled-components/macro";

export const FONT_REGULAR = "AvenirNext-Regular, sans-serif";
export const FONT_BOLD = "AvenirNext-Bold, sans-serif";
export const V_GUTTER = 40;
export const H_GUTTER = 40;

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 17px;
  }

  :root {
    --color-pink: #e53c6e;
    --color-yellow-light: #fcdb7f;
    --color-yellow-dark: #f4b626;
    --color-dark: #2D2327;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: ${FONT_REGULAR};
    height: 100%;
    background-color: #f3f2ef;
    color: var(--color-text-1);
  }

  button {
    font-family: ${FONT_REGULAR};
    -webkit-appearance: none;
    border: none;
    &:focus {
      outline: none;
    }
  }

  .app {
    min-height: 100%;
  }

  h1,h2,h3,h4,h5,p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
  }

  p, span, li, a {
    font-family: 'Arapey', serif;
    letter-spacing: 1px;
    margin-top: 15px;
  }

  a {
      text-decoration: none;
      color: var(--color-text-1);
      cursor: pointer;
  }
`;

export const OuterContainer = Styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = Styled.div`
  width: 100%;
  max-width: 1400px;
  padding: ${V_GUTTER}px ${H_GUTTER}px;
`;

export const SectionHeader = Styled.h2`
    font-size: 30px;
`;
