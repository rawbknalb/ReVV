import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding-top: 45px;
  padding-bottom: 60px;
`;

const AssetClassName = styled.h1`
  font-size: 22px;
  color: #80e6fb;
`;

const FundInfo = styled.p`
  font-size: 16px;
`;

const TinyFundInfo = styled.div`
  display: inline-block;
  font-size: 12px,
  color: #fff
`;

const FundDoc = styled(TinyFundInfo)`
  font-size: 14px;
  color: #80e6fb;
`;

import { CardStack, Card } from "./React-Cardstack";

const FundsCardStack = ({ assetClass, funds }) => {

  const filteredFunds = funds.filter(fund => fund.assetClass === assetClass);
  const renderStack = filteredFunds.map(fund => (
    <Card
      key={fund.fundIsin}
      background="rgba(255, 255, 255, 0.09)"
      cardClicked={() => console.log("Card clicked")}
    >
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px -5px 14px 0px" }}>
        <FundInfo>{fund.fundName}</FundInfo>
        <TinyFundInfo>
          {fund.fundIsin} <FundDoc>Jahresbericht |</FundDoc>{" "}
          <FundDoc>Halbjahresbericht |</FundDoc> {" "}
          <FundDoc>Anlegerinformationen (KID) |</FundDoc> {" "}
          <FundDoc>Verkaufsprospekt</FundDoc>
        </TinyFundInfo>
      </div>
    </Card>
  ));

  const renderFund = (
    <div style={{ height: "300px", width: "100%" }}>
      <FundInfo>{filteredFunds[0].fundName}</FundInfo>
      <TinyFundInfo>
        {filteredFunds[0].fundIsin} <FundDoc>Jahresbericht |</FundDoc>{" "}
        <FundDoc>Halbjahresbericht |</FundDoc> {" "}
        <FundDoc>Anlegerinformationen (KID) |</FundDoc> {" "}
        <FundDoc>Verkaufsprospekt</FundDoc>
      </TinyFundInfo>
    </div>
  );

  return (
    <div>
      {filteredFunds.length > 1
        ? <CardStack height={400} width={null} hoverOffset={50}>
            {renderStack}
          </CardStack>
        : renderFund}
    </div>
  );
};

export default FundsCardStack;
