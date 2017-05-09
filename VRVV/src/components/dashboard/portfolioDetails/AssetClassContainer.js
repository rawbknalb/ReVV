import React from "react";
import FundsCardStack from "./FundsCardStack";
import styled from "styled-components";

const AssetClassName = styled.div`
  font-size: 22px;
  line-height: 28px;
  color: #80e6fb;
  font-style: normal;
  vertical-align: middle;
  font-weight: 300;
  border-bottom: 1px solid #80e6fb;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Div = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #80e6fb;
`;

const AssetClassContainer = ({ assetClass, funds }) => {
  return (
    <Div>
      <AssetClassName>{assetClass}</AssetClassName>
      <FundsCardStack assetClass={assetClass} funds={funds} />
    </Div>
  );
};

export default AssetClassContainer;
