import styled from "styled-components";

export const Panel = styled.section`
  margin-bottom: 1rem;
  /* box-shadow: 5px 5px 20px rgba(0,0,0,0.25);*/
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 0px;
  width: 100%;
  color: white;
  z-index: auto;
`;

export const PanelHeadline = styled.h5`
  color: ${props => (props.primary ? "#80e6fb" : "white")};
  text-align: center;  
  padding-top: 26px;
  padding-bottom: 26px
  z-index: auto;

`;
