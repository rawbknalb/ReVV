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

import { CardStack, Card } from "react-cardstack";

const FundsCardStack = ({ assetClass, funds }) => {
  //console.log(funds);

  const filteredFunds = funds.filter(fund => fund.assetClass === assetClass);
  console.log("filteredFunds: ", filteredFunds);

  const renderStack = filteredFunds.map(fund => (
    <Card
      key={fund.fundIsin}
      background="rgba(255, 255, 255, 0.09)"
      cardClicked={() => console.log("hello")}
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
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px -5px 14px 0px" }}>
        <FundInfo>{filteredFunds[0].fundName}</FundInfo>
        <TinyFundInfo>
          {filteredFunds[0].fundIsin} <FundDoc>Jahresbericht |</FundDoc>{" "}
          <FundDoc>Halbjahresbericht |</FundDoc> {" "}
          <FundDoc>Anlegerinformationen (KID) |</FundDoc> {" "}
          <FundDoc>Verkaufsprospekt</FundDoc>
        </TinyFundInfo>
      </div>
    </div>
  );

  return (
    <div>
      {filteredFunds.length > 1
        ? <CardStack height={400} width={null} hoverOffset={25}>
            {renderStack}
          </CardStack>
        : renderFund}
    </div>
  );
};

export default FundsCardStack;
