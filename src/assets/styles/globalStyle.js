import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Oswald", sans-serif;
        letter-spacing: 0.07em;
    }

    html, body {
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
