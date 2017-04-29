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
    /* vv: linear-gradient(-270deg,#304d98,#4c6eb2) */
    background: -webkit-linear-gradient(-270deg,#304d98,#4c6eb2) , url(./style/brush.svg);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(-270deg,#304d98,#4c6eb2) , url(./style/brush.svg); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: cover;

  }
  
  h1, h2, h3, h4, h5, h6 {
    color: white;
    font-weight: 300;
  }
`;
