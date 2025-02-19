import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "DungGeunMo";
    src: url("/fonts/DungGeunMo.woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: "DungGeunMo", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  body {
    background-color: ${({ theme }) => theme.colors.pkblue};
    color: ${({ theme }) => theme.colors.pkblue};
    font-family: "DungGeunMo", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.l};


  }
`;
