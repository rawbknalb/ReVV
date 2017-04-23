import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-weight: 300;
    line-height: 1.4rem;
    font-family: 'Source Sans Pro', sans-serif;
    background: #232526;  /* fallback for old browsers */
    /* blau: linear-gradient(to right, #00BCD4, #2196F3) */
    /* schwarz: linear-gradient(to right, #414345, #232526) */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  
  h1, h2, h3, h4, h5, h6 {
    color: white;
    font-weight: 300;
  }
`;
