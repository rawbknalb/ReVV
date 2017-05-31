export const rotateOnHover = (count, index) => {
  const mod = count % 2;
  const oddMultiplier = Math.abs(Math.floor(count / 2) - index);
  const evenMultiplier = Math.abs(count);
  if (mod === 0) {
    if (index === count / 2 || index === count / 2 + 1) {
      return { rotateY: 0 };
    }
    if (index < count / 2) {
      return { rotateY: `${(index + 1) * 4}deg` };
    }
    if (index > count / 2) {
      return { rotateY: `${(index + 1) * -4}deg` };
    }
  } else {
    console.log(Math.floor(count / 2));
    if (index === Math.floor(count / 2)) {
      return 0;
    }
    if (index < Math.floor(count / 2)) {
      return oddMultiplier * 2;
    }
    if (index > Math.floor(count / 2)) {
      return oddMultiplier * -2;
    }
  }
};

export const PortfolioVariationList = [
  {
    type: "VestFolio",
    header: "VestFolio aus ETFs",
    text: "Mit unseren ETF-VestFolios investierst du in eines von sieben breit gestreuten Portfolios aus passiv verwalteten Indexfonds.",
    img: "prod-passiv-mo.png"
  },
  {
    type: "GreenFolio",
    header: "GreenFolio",
    text: "Mit unseren GreenFolios investierst du ausschließlich in nachhaltige Fonds, die sich dem Schutz von Natur und Menschenrechten widmen.",
    img: "prod-green-mo.png"
  },
  {
    type: "Aktiv",
    header: "VestFolio aus aktiv verwalteten Fonds",
    text: "Mit unseren aktiven VestFolios investierst du in eines von sieben breit gestreuten Portfolios aus aktiv verwalteten Fonds.",
    img: "prod-aktiv-mo.png"
  }
];
