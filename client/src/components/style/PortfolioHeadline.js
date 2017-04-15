import styled from "styled-components";

export const PortfolioHeadlineInfo = styled.h5`
  color: ${props => (props.primary ? "#80e6fb" : "white")};
  font-weight: 300;
  text-align: ${props => (props.left ? "left" : "center")};
`;