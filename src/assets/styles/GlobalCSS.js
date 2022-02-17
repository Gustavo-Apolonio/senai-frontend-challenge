import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100vh;
        width: 100%;

        margin: 0px;
        padding: 0px;

        box-sizing: border-box;

        background-color: #f5f5f5;

        font-size: 14px;
    }

    #root {
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;
