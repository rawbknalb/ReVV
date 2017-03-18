import React from "react";

const Header = fund => (
  <div class="card-header" role="tab" id="headingOne">
    <h5 class="mb-0">
      <a
        data-toggle="collapse"
        data-parent="#accordion"
        href="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Collapsible Group Item #1
      </a>
    </h5>
  </div>
);

const Context = assetClass => {
  const funds = assetClass.reduce(
    (funds, assetClass) => {
      funds.push(...assetClass.funds);
      return funds;
    },
    []
  );

  const fundsList = funds.map(fund => {
    return (
      <ul>
        <li>
          {fund.name}
        </li>
      </ul>
    );
  });

  return (
    <div
      id="collapseOne"
      class="collapse show"
      role="tabpanel"
      aria-labelledby="headingOne"
    >
      <div class="card-block">
        {this.fundslist()}
      </div>
    </div>
  );
};

const RenderAccordionList = ({ assetAllocation }) => {
  const assetClasses = assetAllocation.map(assetClass => {
    const { type, weight } = assetClass;
    return { type, weight };
  });

  return assetAllocation.map(assetClass => (
    <div class="card">
      <Header fund={assetClass} />
      <Context fund={assetClass} />
    </div>
  ));
};

const Details = ({ ...data}) => (
  <div id={name} role="tablist" aria-multiselectable="true">
    <RenderAccordionList assetAllocation={classes} />
  </div>
);

export default Details;
