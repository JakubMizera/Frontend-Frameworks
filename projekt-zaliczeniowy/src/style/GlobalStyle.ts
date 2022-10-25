import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: 16px;
    }

    * {
        box-sizing: border-box;
    }

    body {
        overflow: hidden;
    }
`