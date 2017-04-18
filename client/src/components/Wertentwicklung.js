import React from "react";
import styled from "styled-components";

export const SiteTitle = styled.h1`
  color: #2196F3;
  margin: 1.5em 0 1.5em 0;
  font-size: 44px;
  text-align: center;
`;

export const SectionHeader = styled.h3`
  font-size: 34px;
  color: #2196F3;
  margin: 1em 0 1em 0;
  text-align: center;
`;

export const SiteTextBlock = styled.p`
  font-size: 18px;
  color: white;
  /* padding: 0 15% 0 15%; */
  margin-right: auto;
  margin-left: auto;
`;

const text = {
  section_1: "Bei VisualVest investierst du mit der Geldanlage in ein Portfolio an Fonds weltweit, in verschiedene Branchen und in unterschiedliche Anlageklassen wie Aktienfonds, Anleihefonds, Geldmarktfonds und Rohstofffonds. Du profitierst von der globalen Streuung deines Geldes, weil dieser Grad an Diversifizierung die negativen Auswirkungen auf einem Teilmarkt ausgleicht. Dabei bieten wir dir 14 klassische VestFolios und drei nachhaltige GreenFolios für unterschiedliche Anlegertypen an. Nicht jedes Portfolio entwickelt sich allerdings identisch, denn die Wertentwicklung hängt von der Zusammenstellung der Portfolios und dem Einstiegszeitpunkt ab. Damit du aber ein Gefühl dafür bekommst, wie unsere Portfolios abschneiden, zeigen wir dir die Wertentwicklung. Es handelt sich hier um die Netto-Performance der Portfolios, das bedeutet, alle Kosten und Gebühren wurden bereits herausgerechnet. Du kannst vergleichen, wie sich 100 € bei VisualVest entwickelt hätten:",
  section_2: "Wie du siehst: Die Märkte gehen rauf und runter, wodurch du zu verschiedenen Einstiegspunkten auch unterschiedliche Renditen erzielen kannst. Davon solltest du dich aber nicht beeinflussen lassen. Wir möchten für dich langfristig ein Vermögen aufbauen und da spielen kurzfristige Schwankungen kaum noch eine Rolle. Die Netto-Performance unserer Portfolios seit dem Start kannst du hier direkt vergleichen. Die frühere Wertentwicklung ist kein verlässlicher Indikator für die künftige Wertentwicklung.",
  section_3: "Die Anlage bei VisualVest ist langfristig ausgerichtet, denn ein kleines Vermögen lässt sich am besten aufbauen, in dem du regelmäßig, langfristig und zielorientiert sparst. Wir empfehlen dir dabei mindestens drei Jahre anzulegen und dich nicht durch kurzfristige Schwankungen beunruhigen zu lassen. Je länger der Anlagezeitraum ist, desto unerheblicher werden Marktschwankungen. Wir empfehlen dir übrigens auch mit regelmäßigen Sparraten zu investieren, denn mit einem Sparplan kannst du bei niedrigen Kursen mehr Fondsanteile erwerben und bei höheren Kursen weniger, wodurch du einen guten Durchschnitts-Preis erhältst. Und damit du dich bis zur Auszahlung entspannen kannst, behalten wir dein Ziel für dich im Blick. Solltest du deinen Zielbetrag zur gewünschten Laufzeit mal nicht erreichen, geben wir dir Bescheid und unterbreiten dir Vorschläge, was du tun kannst."
};

const Wertentwicklung = () => (
  <div>
    <SiteTitle>Die Wertentwicklung unserer Portfolios</SiteTitle>
    <SiteTextBlock>{text.section_1}</SiteTextBlock>
    <SiteTextBlock>{text.section_2}</SiteTextBlock>
    <SiteTextBlock>{text.section_3}</SiteTextBlock>
  </div>
);

export default Wertentwicklung;
