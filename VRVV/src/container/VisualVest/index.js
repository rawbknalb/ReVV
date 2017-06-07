import React, { Component } from "react";
import { asset, Text, View, VrButton } from "react-vr";

import CurvedPanel from "../../components/CurvedPanel";

const REASON_FOR_VV = [
  {
    reason: "Sicherheit",
    sub_reasons: [
      {
        sub_reason: "Depotschutz",
        order: 1,
        img: "vv_gruende/sicherheit_depotschutz",
        text: "Dein Geld liegt sicher bei einer der größten Fondsgesellschaften Deutschlands. Es wird von unserer Partnerbank, der Union Investment Service Bank AG (USB) verwaltet. Bei der USB hinterlegst du dein Referenzkonto, welches somit der langjährigen Erfahrung einer depotführenden Bank unterliegt. Die Kommunikation mit der USB läuft über dein VisualVest-Benutzerkonto bei uns."
      },
      // { text: "Home", route: "home", type: "nav", position: 1 },
      {
        sub_reason: "Transaktionsschutz",
        order: 2,
        img: "vv_gruende/sicherheit_transaktionsschutz",
        text: "Für Geldtransaktionen gelten bei uns höchste Sicherheitsstandards. Transaktionen werden durch unser mTAN-Verfahren vor Angriffen geschützt. In deinem Benutzerkonto kannst du jederzeit nachverfolgen, welche Geldtransfers stattgefunden haben. Unsere IT-Systeme werden durch externe Sicherheitsexperten regelmäßig überprüft und aktualisiert. Unsere Internetseite ist SSL-verschlüsselt, wodurch alle Daten, die übertragen werden, vorher verschlüsselt wurden."
      },
      {
        sub_reason: "Insolventschutz",
        order: 3,
        img: "vv_gruende/sicherheit_insolvenzschutz",
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
        img: "vv_gruende/unabhaengigkeit_fondsauswahl",
        text: "Die Portfolios sind breit gestreut, um das Risiko zu minimieren. Das bedeutet, dass dein Geld auf die Anlageklassen Aktien, Anleihen, Geldmarkt und Rohstoffe aufgeteilt wird. Unsere Experten der Union Investment wählen nach strengen Qualitätskriterien die Besten aus über 13.000 Fonds von unterschiedlichen Fondsgesellschaften aus."
      },
      {
        sub_reason: "Portfolioempfehlung",
        order: 2,
        img: "vv_gruende/unabhaengigkeit_portfolioempfehlung",
        text: "Du kannst zwischen einem Portfolio aus aktiv verwalteten Fonds und aus passiven Indexfonds (ETFs) wählen. Unsere Anlageberatung basiert auf mathematischen Modellen und ist damit völlig unabhängig. Wir machen dir einen Vorschlag und du bist der Entscheider. Du kannst unseren Vorschlag auch unverbindlich speichern."
      },
      {
        sub_reason: "Angebot",
        order: 3,
        img: "vv_gruende/unabhaengigkeit_angebot",
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
        img: "vv_gruende/flexibilitaet_zugriff",
        text: "Über dein VisualVest Benutzerkonto ist dein Geld jederzeit und von überall verfügbar. Ein- und Auszahlung können ohne weitere Kosten durchgeführt werden. Du kannst alles bequem am PC und per App erledigen. Wir unterstützen die Plattformen iOS und Android (Version 5.0 und höher)."
      },
      {
        sub_reason: "Anpassen",
        order: 2,
        img: "vv_gruende/flexibilitaet_anpassen",
        text: "Du hast die Möglichkeit mehrere Anlageziele anzulegen um auf unterschiedliche Ziele zu sparen. Ändern sich deine Ziele, kannst du jederzeit die Sparraten verändern oder aussetzen. Unser dynamischer Sparplan ermöglicht es dir zudem, deine Sparraten über die Zeit automatisch zu erhöhen"
      },
      {
        sub_reason: "Updates",
        order: 3,
        img: "vv_gruende/flexibilitaet_updates",
        text: "Wir veröffentlichen regelmäßig neue Features und Updates. Damit genießt du automatisch Verbesserungen und Erweiterungen in unserer Lösung. VisualVest kombiniert so die Stärke und die Finanzexpertise der Union Investment mit der Schnelligkeit und Transparenz eines Fintech-Startups."
      }
    ]
  }
];

class VisualVest extends Component {
  constructor() {
    super();
    this.state = {
      clickedReason: null,
      clickedSubReason: null,
      open: false
    };
  }

  renderReasons() {
    return REASON_FOR_VV.map(reason => (
      <VrButton onClick={() => this.setState({ clickedReason: reason.reason })}>
        <Text
          key={reason.reason}
          style={{
            margin: 60,
            fontSize: 80,
            textAlign: "center",
            textAlignVertical: "center",
            justifyContent: "space-between"
          }}
        >
          {reason.reason}
        </Text>
      </VrButton>
    ));
  }

  renderSubReasons() {
    if (this.state.clickedReason !== null) {
      const filteredReasons = REASON_FOR_VV.filter(
        reason => reason.reason === this.state.clickedReason
      );

      const subReasons = filteredReasons[0].sub_reasons;
      console.log("filteredReasons: ", filteredReasons);
      console.log("subReasons: ", subReasons);

      return subReasons.map(subReason => (
        <VrButton>
          <Text
            key={subReason.orders}
            style={{
              margin: 0,
              fontSize: 0.15,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {subReason.sub_reason}
          </Text>
        </VrButton>
      ));
    }
  }

  render() {
    console.log(this.state.clickedReason);
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          transform: [{ translate: [0, 0, -3] }]
        }}
      >
        <View
          style={{ transform: [{ rotateY: 45 }, { translate: [0, 0.8, 0] }] }}
        >
          <CurvedPanel
            width={1000}
            height={1000}
            density={8000}
            justifyContent="center"
          >
            <View style={{ width: 1000, height: 1000 }}>
              <View
                style={{
                  position: "absolute",
                  borderRadius: 30,
                  width: 1000,
                  height: 1000,
                  backgroundColor: "black",
                  opacity: 0.8
                }}
              />
              {this.renderReasons()}
            </View>
          </CurvedPanel>
        </View>

        <View
          style={{
            layoutOrigin: [0.5, 0.42],
            transform: [{ translate: [0, 0, 0] }],
            width: 2,
            height: 1.7
          }}
        >
          <View
            style={{
              position: "absolute",
              borderRadius: 0.04,
              width: 2,
              height: 1.7,
              backgroundColor: "black",
              opacity: 0.8,
              justifyContent: "space-between"
            }}
          />
          {this.renderSubReasons()}
        </View>
      </View>
    );
  }
}

export default VisualVest;
