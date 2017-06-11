import React, { Component } from "react";
import { Text, View, VrButton, Animated } from "react-vr";
import { connect } from "react-redux";

import CurvedPanel from "../../components/CurvedPanel";

const INTRO_PANEL_TEXT = [
  {
    order: 1,
    text: "Herzlich Willkommen, wir laden dich ein die virtuelle Welt von VisualVest zu entdecken. Zu aller erst: Schaltflächen lassen sich mit dem Kreis in der Mitte deines Sichtfeldes anvisieren und auslösen. Dies funktioniert über Touch Gesten oder über einen Controller. Schau dich um und mach dich mit der Umgebung vertraut."
  },
  // { text: "Home", route: "home", type: "nav", position: 1 },
  {
    order: 2,
    text: "Wir bieten dir hier die Möglichkeit unser umfangreiches Angebot aus neuen Blickwinkeln zu entdecken und interaktiv unsere Portfolios unter die Lupe zu nehmen. Folgende Bereiche kannst du über das Menü betreten: "
  },
  {
    order: 3,
    text: "Wissen: Informiere dich über ETFs und nachhaltiger Geldanlage"
  },
  {
    order: 4,
    text: "Portfolios: Entdecke die Vielfalt unserer Portfolios. Mach dir ein Bild von Risiko und Rendite"
  },
  {
    order: 5,
    text: "VisualVest: Gute Gründe für die Geldanlage bei VisualVest findest du hier"
  },
  {
    order: 6,
    text: "Verwende nun das Menü um in einen Bereich zu navigieren. Um dein Geld langfristig mit uns an deiner Seite anzulegen, besuche uns auf www.visualvest.de. Viel Spaß! "
  }
];

class IntroView extends Component {
  constructor() {
    super();
    this.state = {
      textOrder: 1
    };
  }


  renderIntroText() {
    return INTRO_PANEL_TEXT.map(
      text =>
        this.state.textOrder === text.order &&
        <Text
          key={text.order}
          style={{
            margin: 60,
            fontSize: 90,
            textAlign: "center",
            textAlignVertical: "center"
          }}
        >
          {text.text}
        </Text>
    );
  }

  handleNextClick() {
    this.state.textOrder < 6 &&
      this.setState({ textOrder: this.state.textOrder + 1 });
  }

  render() {
    console.log(this.state.textOrder);
    return (
      <View style={{ transform: [{ translate: [0, 0, -20] }] }}>
        <CurvedPanel
          width={2000}
          height={1000}
          density={6000}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 2000,
              height: 1000
            }}
          >
            <View
              style={{
                position: "absolute",
                width: 2000,
                height: 1000,
                borderRadius: 30,
                backgroundColor: "black",
                opacity: 0.8
              }}
            />
            {this.renderIntroText()}
            {this.state.textOrder < 6 &&
              <VrButton
                onClick={() =>
                  this.setState({ textOrder: this.state.textOrder + 1 })}
                style={{
                  margin: 50,
                  width: 400,
                  height: 150,
                  borderRadius: 20,
                  borderColor: "white",
                  borderWidth: 6
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: 385,
                    height: 140,
                    borderRadius: 30,
                    opacity: 0.1,
                    backgroundColor: "white"
                  }}
                />
                <Text
                  style={{
                    fontSize: 100,
                    textAlign: "center",
                    textAlignVertical: "center"
                  }}
                >
                  Weiter
                </Text>
              </VrButton>}
          </View>
        </CurvedPanel>

      </View>
    );
  }

  IntroViewStyle = () => ({
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    layoutOrigin: [0.5, 0.5],
    transform: [{ translateX: this.state.translateX }, { rotateX: -20 }]
  });
}

export default connect(null)(IntroView);
