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

export const REASON_FOR_VV = [
  {
    reason: "Sicherheit",
    sub_reasons: [
      {
        sub_reason: "Depotschutz",
        order: 1,
        img: "vv_gruende/sicherheit_depotschutz.png",
        text: "Dein Geld liegt sicher bei einer der größten Fondsgesellschaften Deutschlands. Es wird von unserer Partnerbank, der Union Investment Service Bank AG (USB) verwaltet. Bei der USB hinterlegst du dein Referenzkonto, welches somit der langjährigen Erfahrung einer depotführenden Bank unterliegt. Die Kommunikation mit der USB läuft über dein VisualVest-Benutzerkonto bei uns."
      },
      // { text: "Home", route: "home", type: "nav", position: 1 },
      {
        sub_reason: "Transaktionsschutz",
        order: 2,
        img: "vv_gruende/sicherheit_transaktionsschutz.png",
        text: "Für Geldtransaktionen gelten bei uns höchste Sicherheitsstandards. Transaktionen werden durch unser mTAN-Verfahren vor Angriffen geschützt. In deinem Benutzerkonto kannst du jederzeit nachverfolgen, welche Geldtransfers stattgefunden haben. Unsere IT-Systeme werden durch externe Sicherheitsexperten regelmäßig überprüft und aktualisiert. Unsere Internetseite ist SSL-verschlüsselt, wodurch alle Daten, die übertragen werden, vorher verschlüsselt wurden."
      },
      {
        sub_reason: "Insolventschutz",
        order: 3,
        img: "vv_gruende/sicherheit_insolvenzschutz.png",
        text: "Investmentsfonds gehören zum Sondervermögen und genießen einen besonderen Anlegerschutz, da sie den strengen rechtlichen Regeln unterliegen und durch die Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) überwacht werden. Im Falle einer Insolvenz von VisualVest oder anderer beteiligter Unternehmen bleibt das Geld in den Portfolios unangetastet. Du bekommst es auf jeden Fall zurück."
      }
    ]
  },
  {
    reason: "Unabhängigkeit",
    sub_reasons: [
      {
        sub_reason: "Fondsauswahl",
        order: 1,
        img: "vv_gruende/unabhaengigkeit_fondsauswahl.png",
        text: "Die Portfolios sind breit gestreut, um das Risiko zu minimieren. Das bedeutet, dass dein Geld auf die Anlageklassen Aktien, Anleihen, Geldmarkt und Rohstoffe aufgeteilt wird. Unsere Experten der Union Investment wählen nach strengen Qualitätskriterien die Besten aus über 13.000 Fonds von unterschiedlichen Fondsgesellschaften aus."
      },
      {
        sub_reason: "Portfolioempfehlung",
        order: 2,
        img: "vv_gruende/unabhaengigkeit_portfolioempfehlung.png",
        text: "Du kannst zwischen einem Portfolio aus aktiv verwalteten Fonds und aus passiven Indexfonds (ETFs) wählen. Unsere Anlageberatung basiert auf mathematischen Modellen und ist damit völlig unabhängig. Wir machen dir einen Vorschlag und du bist der Entscheider. Du kannst unseren Vorschlag auch unverbindlich speichern."
      },
      {
        sub_reason: "Angebot",
        order: 3,
        img: "vv_gruende/unabhaengigkeit_angebot.png",
        text: "Wir sind transparent: Du zahlst monatlich 0,05 % deiner Anlage. Es gibt keine versteckten Kosten und kein Kleingedrucktes. Provisionen, die wir für die Vermittlung der Fonds erhalten, fließen direkt an dich zurück. Du wirst über alles informiert, auch über Risiken, die die Geldanlage in Fonds mit sich bringt."
      }
    ]
  },
  {
    reason: "Flexibilität",
    sub_reasons: [
      {
        sub_reason: "Zugriff",
        order: 1,
        img: "vv_gruende/flexibilitaet_zugriff.png",
        text: "Über dein VisualVest Benutzerkonto ist dein Geld jederzeit und von überall verfügbar. Ein- und Auszahlung können ohne weitere Kosten durchgeführt werden. Du kannst alles bequem am PC und per App erledigen. Wir unterstützen die Plattformen iOS und Android (Version 5.0 und höher)."
      },
      {
        sub_reason: "Anpassen",
        order: 2,
        img: "vv_gruende/flexibilitaet_anpassen.png",
        text: "Du hast die Möglichkeit mehrere Anlageziele anzulegen um auf unterschiedliche Ziele zu sparen. Ändern sich deine Ziele, kannst du jederzeit die Sparraten verändern oder aussetzen. Unser dynamischer Sparplan ermöglicht es dir zudem, deine Sparraten über die Zeit automatisch zu erhöhen"
      },
      {
        sub_reason: "Updates",
        order: 3,
        img: "vv_gruende/flexibilitaet_updates.png",
        text: "Wir veröffentlichen regelmäßig neue Features und Updates. Damit genießt du automatisch Verbesserungen und Erweiterungen in unserer Lösung. VisualVest kombiniert so die Stärke und die Finanzexpertise der Union Investment mit der Schnelligkeit und Transparenz eines Fintech-Startups."
      }
    ]
  }
];
