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

// const PortfolioTitle = {
//   // ETF
//   1: "Unser defensives Musterportfolio",
//   2: "Unser Musterportfolio mit Substanz",
//   3: "Unser ertragreiches Musterportfolio",
//   4: "Das ausgewogene Musterportfolio",
//   5: "Das gewinnorientierte Musterportfolio",
//   6: "Das dynamische Musterportfolio",
//   7: "Das chancenorientierte Musterportfolio",
//   // Aktiv
//   11: "Unser defensives Musterportfolio",
//   12: "Unser Musterportfolio mit Substanz",
//   13: "Unser ertragreiches Musterportfolio",
//   14: "Das ausgewogene Musterportfolio",
//   15: "Das gewinnorientierte Musterportfolio",
//   16: "Das dynamische Musterportfolio",
//   17: "Das chancenorientierte Musterportfolio",
//   // GreenFolio
//   21: "Unser ertragreiches Musterportfolio",
//   22: "Das ausgewogene Musterportfolio",
//   23: "Das chancenorientierte Musterportfolio"
// };

const PortfolioTitle = {
  1: "Unser defensives ETF-VestFolio mit höchstem Anteil an Geldmarkt- und Anleihenfonds",
  2: "Unser ETF-VestFolio mit bis zu 80% Anteil in risikoärmere Anlageklassen",
  3: "Das ETF-VestFolio zur Erzielung von Erträgen aus globalen Anleihen und erhöhtem Aktien- und Rohstoffanteil",
  4: "Unser ETF-VestFolio mit ausgewogener Verteilung der Gelder in Anleihen sowie Aktien und Rohstoffe",
  5: "Unser gewinnorientiertes ETF-VestFolio mit erhöhtem Aktienanteil in globalen Märkten",
  6: "Das dynamische ETF-VestFolio mit Chancen in Aktien- und Rohstoffmärkten zu erhöhtem Risiko",
  7: "Unser ETF-VestFolio mit bis zu 75% Aktienanteil bietet hohe Chancen zu höchstem Risiko",

  11: "Unser defensives VestFolio mit höchstem Anteil an Geldmarkt- und Anleihenfonds",
  12: "Unser VestFolio mit bis zu 80% Anteil in risikoärmere Anlageklassen",
  13: "Das VestFolio zur Erzielung von Erträgen aus globalen Anleihen und erhöhtem Aktien- und Rohstoffanteil",
  14: "Unser VestFolio mit ausgewogener Verteilung der Gelder in Anleihen sowie Aktien und Rohstoffe",
  15: "Unser gewinnorientiertes VestFolio mit erhöhtem Aktienanteil in globalen Märkten",
  16: "Das dynamische VestFolio mit Chancen in Aktien- und Rohstoffmärkten zu erhöhtem Risiko",
  17: "Unser VestFolio mit bis zu 75% Aktienanteil bietet hohe Chancen zu höchstem Risiko",

  21: "Unser GreenFolio zur Ertragserzielung mit mehr als 75% Anteil in Anleihen",
  22: "Unser ausgewogenes GreenFolio mit gleichmäßiger Verteilung der Gelder in Anleihen und Aktien",
  23: "Das chancenorientierte GreenFolio mit hohem Aktienanteil bietet hohe Chancen zu höchstem Risiko"
};

export const addPortfolioTitle = portfolio => {
  return PortfolioTitle[portfolio.id];
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
      return allPortfolios.filter(
        portfolio =>
          portfolio.managed === false && portfolio.sustainable === false
      );
    case "GreenFolio":
      return allPortfolios.filter(portfolio => portfolio.sustainable === true);
    case "Aktiv":
      return allPortfolios.filter(
        portfolio =>
          portfolio.managed === true && portfolio.sustainable === false
      );
    default:
      return;
  }
};
