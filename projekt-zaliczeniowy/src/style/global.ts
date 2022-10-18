import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: 16px;
    }

    body {
        background-color: #060604;
        overflow: hidden;
    }

    box-sizing: border-box;
`