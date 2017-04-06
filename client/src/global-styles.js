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
    font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;
    background-color: black;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image:
      linear-gradient(
        to right,
        rgba(5, 137, 255, 0.52) 0%,
        rgba(10, 137, 207, 0.92) 0%,
        rgba(10, 137, 207, 0.92) 70%
      ),
      linear-gradient(
        to bottom,
        rgba(0, 57, 255, 0.79) 0%,
        rgba(16, 255, 0, 0.3) 30%,
        rgba(71, 30, 235, 0.3) 70%
      );
  }
  h1 {
    font-size: 5em;
    margin: 0.67em 0;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #001A33;
  }
`;
