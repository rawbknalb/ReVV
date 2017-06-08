import React, { Component } from "react";
import { asset, Text, View, Image, VrButton, Animated } from "react-vr";

import CurvedPanel from "../../components/CurvedPanel";

const REASON_FOR_VV = [
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

class VisualVest extends Component {
  constructor() {
    super();
    this.state = {
      clickedReason: "Sicherheit",
      clickedSubReason: null,
      open: false,
      opacityValue: new Animated.Value(0),
      widthValue: new Animated.Value(0)
    };
  }

  animateReasonDetail() {
    Animated.parallel([
      Animated.spring(this.state.widthValue, { toValue: 1500, spring: 10 }),
      Animated.timing(this.state.opacityValue, {
        toValue: 1,
        timing: 1
      })
    ]).start();
  }

  handleSubReasonClick(subReason) {
    this.animateReasonDetail();
    this.setState({ clickedSubReason: subReason });
  }

  reasonDetailStyle = () => ({
    width: this.state.widthValue,
    opacity: this.state.opacityValue
  });

  renderReasonDetail() {
    return (
      <Animated.View
        style={[
          {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 1000,
            width: this.state.widthValue,
            opacity: this.state.opacityValue
          }
        ]}
      >
        <Animated.View
          style={{
            position: "absolute",
            borderRadius: 30,
            width: this.state.widthValue,
            height: 1000,
            backgroundColor: "black",
            opacity: 0.8
          }}
        />
        {this.renderSubReasonText()}
      </Animated.View>
    );
  }

  renderSubReasonText() {
    if (this.state.clickedSubReason !== null) {
      /**
       * For each parent Reason Element of the REASON Array the inner 
       * SubReason Array gets searched/find for the right SubReason from the
       * component state. Each iteration you get an Object or undefined. Only if 
       * the matchedSubReason is not undefined, assign the new obj to the found Object.
       */
      const matchedSubReason = REASON_FOR_VV.reduce((obj, reason) => {
        const matchedSubReason = reason.sub_reasons.find(
          subReason => subReason.sub_reason === this.state.clickedSubReason
        );

        if (matchedSubReason !== undefined) {
          obj = matchedSubReason;
        }
        return obj;
      }, {});

      const subReasonText = matchedSubReason.text;
      const subReasonImg = matchedSubReason.img;

      return (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              margin: 10,
              width: 900,
              height: 500,
              borderRadius: 30
            }}
            source={asset(subReasonImg)}
          />
          <Text
            style={{
              margin: 50,
              fontSize: 50,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {subReasonText}
          </Text>
        </View>
      );
    }
  }

  renderReasons() {
    return REASON_FOR_VV.map(reason => (
      <VrButton onClick={() => this.setState({ clickedReason: reason.reason })}>
        <Text
          key={reason.reason}
          style={{
            margin: 60,
            fontSize: 80,
            textAlign: "right",
            textAlignVertical: "center",
            color: this.state.clickedReason === reason.reason
              ? "tomato"
              : "white"
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

      return subReasons.map(subReason => (
        <VrButton
          key={subReason.order}
          onClick={() =>
            this.state.clickedSubReason === null
              ? this.handleSubReasonClick(subReason.sub_reason)
              : this.setState({ clickedSubReason: subReason.sub_reason })}
          style={{
            borderColor: this.state.clickedSubReason === subReason.sub_reason
              ? "tomato"
              : "white",
            borderWidth: 3,
            borderRadius: 10,
            margin: 10
          }}
        >
          <Text
            style={{
              margin: 50,
              fontSize: 80,
              textAlign: "left",
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
    return (
      <View
        style={{
          flexDirection: "row",
          transform: [{ translate: [0, 0, -3] }]
        }}
      >
        <View style={{ transform: [{ rotateY: 0 }, { translate: [0, 0, 0] }] }}>
          <CurvedPanel
            width={3200}
            height={1000}
            density={8000}
            justifyContent="space-around"
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: 1500,
                height: 1000
              }}
            >
              <View
                style={{
                  position: "absolute",
                  borderRadius: 30,
                  width: 1500,
                  height: 1000,
                  backgroundColor: "black",
                  opacity: 0.8
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 1500,
                  justifyContent: "center",
                  alignItems: "flex-start"
                }}
              >
                {this.renderReasons()}
              </View>
              <View
                style={{
                  width: 1000,
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >

                {this.renderSubReasons()}
              </View>
            </View>
            {this.renderReasonDetail()}

          </CurvedPanel>
        </View>
      </View>
    );
  }
}

export default VisualVest;
