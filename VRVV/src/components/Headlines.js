import React from "react";
import { View, Text, Animated } from "react-vr";

export class PortfolioOverViewHeadlines extends React.Component {
  state = { opacity: new Animated.Value(0) };

  componentDidMount() {
    this.animateOnRender();
  }

  animateOnRender() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.viewStyle()}>
        <View>
          <Text
            style={{
              fontSize: 0.8,
              fontWeight: "300",
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "left",
              textAlignVertical: "center"
            }}
          >
            1. Wähle zunächst eine Ausführung aus
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 0.8,
              fontWeight: "300",
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "left",
              textAlignVertical: "center"
            }}
          >
            2. Vergleiche unsere VestFolios mit ETFs,{" "}
          </Text>
          <Text
            style={{
              fontSize: 0.8,
              fontWeight: "300",
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            VestFolios mit nachhaltigen Fonds und
          </Text>
          <Text
            style={{
              fontSize: 0.8,
              fontWeight: "300",
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            VestFolios mit aktiv verwalteten Fonds
          </Text>
        </View>
      </Animated.View>
    );
  }
  viewStyle() {
    return {
      transform: [{ translate: [0, 8, -20] }],
      opacity: this.state.opacity
    };
  }
}

export class WelcomeViewHeadlines extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 1,
            fontWeight: "300",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 5, -12] }]
          }}
        >
          Herzlich Willkommen zu VisualVest
          {" "}
          <Text style={{ color: "orangered" }}>VR</Text>
        </Text>
      </View>
    );
  }
}
