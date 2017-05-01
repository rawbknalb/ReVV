export const getSelectedPortfolio = (allPortfolios, selectedPortfolioId) => {
  return allPortfolios
    .filter(portfolio => portfolio.id === selectedPortfolioId)
    .reduce(portfolio => ({ ...portfolio }));
};

export const createAssetAllocation = portfolio => {
  return portfolio.funds.reduce((obj, fund) => {
    const assetClassName = fund.assetClass;
    const { sharePercentage } = fund;

    return {
      ...obj,
      [assetClassName]: obj[assetClassName] !== undefined
        ? sharePercentage + obj[assetClassName]
        : sharePercentage
    };
  }, {});
};
