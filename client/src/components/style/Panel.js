import styled from "styled-components";

export const Panel = styled.section`
  position: relative;
  margin: 5px;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.098);
  border-radius: 10px;
  width: 100%;
  color: white;
  height: 500px;
`;

export const PanelHeadline = styled.h5`
  color: ${props => (props.primary ? "#80e6fb" : "white")};
  text-align: center;  
  padding-top: 26px;
  padding-bottom: 26px
  z-index: auto;

`;
