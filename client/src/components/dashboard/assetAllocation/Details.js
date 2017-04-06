import React from "react";

const Header = props => (
  <div className="card-header" role="tab" id="headingOne">
    <h5 className="mb-0">
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

  const renderFundsList = funds.map(fund => {
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
        {this.renderFundsList()}
      </div>
    </div>
  );
};

// const RenderAccordionList = props => {
//   console.log(props)
//   const assetClasses = assetAllocation.classes.map(assetClass => {
//     const { type, weight } = assetClass;
//     return { type, weight };
//   });

// };

const Details = props => {
  const assetClasses = props.data.classes.map(assetClass => {
    const { type, weight } = assetClass;
    return { type, weight };
  });

  const renderList = asset => (
      <div className="card" key={asset.type}>
        <Header assetClass={assetClasses} />
      </div>
  )

  console.log(props);
  console.log(assetClasses);
  return (
    <div id={props.name} role="tablist" aria-multiselectable="true">
      {assetClasses.map(asset => renderList(asset))}
    </div>
  );
};

export default Details;
