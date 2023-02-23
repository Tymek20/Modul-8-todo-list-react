import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.5;
        background-color: ${({ theme }) => theme.colors.ebb};
    }
`;