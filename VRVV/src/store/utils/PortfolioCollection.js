const AssetClassNames = {
  CASH: "Geldmarkt",
  RENTEN: "Anleihen",
  AKTIEN: "Aktien",
  ROHSTOFFE: "Rohstoffe"
};
const SubAssetClassNames = {
  EURO_CASH: "Euro Geldmarkt",
  EURO_STAATSANLEIHEN: "Euro Staatsanleihen",
  GLOBALE_STAATSANLEIHEN: "Globale Staatsanleihen",
  GLOBALE_UNTERNEHMENSANLEIHEN: "Globale Unternehmensanleihen",
  "AKTIEN_AUS_INDUSTRIE-LAENDERN": "Aktien aus Industrieländern",
  AKTIEN_AUS_SCHWELLENLAENDERN_GLOBAL: "Aktien aus Schwellenländern",
  ROHSTOFFE: "Rohstoffe"
};

export const getSelectedPortfolio = (allPortfolios, selectedPortfolioId) => {
  return allPortfolios
    .filter(portfolio => portfolio.id === selectedPortfolioId)
    .reduce(portfolio => ({ ...portfolio }));
};

export const transformAssetClassNames = portfolio => {
  const newFunds = portfolio.funds.map(fund => {
    const { assetClass, subAssetClass } = fund;
    return {
      ...fund,
      assetClass: AssetClassNames[assetClass],
      subAssetClass: SubAssetClassNames[subAssetClass]
    };
  });
  return newFunds;
};

export const createAssetAllocation = portfolio => {
  return portfolio.funds.reduce((obj, fund) => {
    const { sharePercentage, assetClass } = fund;
    const assetClassName = (fund[assetClass] = AssetClassNames[assetClass]);
    return {
      ...obj,
      [assetClassName]: obj[assetClassName] !== undefined
        ? sharePercentage + obj[assetClassName]
        : sharePercentage
    };
  }, {});
};

// filter all portfolios which contain the String passed as variation
export const filterByVariation = (allPortfolios, variation) => {
  switch (variation) {
    case "VestFolio":
      return allPortfolios.filter(portfolio => portfolio.managed === false && portfolio.sustainable === false);
    case "GreenFolio":
      return allPortfolios.filter(portfolio => portfolio.sustainable === true);
    case "Aktiv":
      return allPortfolios.filter(portfolio => portfolio.managed === true && portfolio.sustainable === false);
    default:
      return;
  }
};
