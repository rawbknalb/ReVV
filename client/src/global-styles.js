import { injectGlobal } from "styled-components";

injectGlobal`

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    background: #EEE;
    line-height: 1.4rem;
    font-family: "Source Sans Pro", sans-serif;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image:
      linear-gradient(
        to right,
        rgba(49, 162, 226, 0.52) 0%,
        rgba(74, 76, 78, 0.92) 0%,
        rgba(0, 32, 48, 0.7) 70%
      ),
      linear-gradient(
        to bottom,
        rgba(0, 109, 255, 0.71) 0%,
        rgba(16, 144, 255, 0.47) 30%,
        rgba(71, 30, 235, 0.3) 70%
      );
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: white;
    font-weight: 300;
  }
`;
