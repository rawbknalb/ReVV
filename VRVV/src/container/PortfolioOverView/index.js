import React, { Component } from "react";
import { Pano, Text, View, Animated, VrButton } from "react-vr";
import { connect } from "react-redux";

import FlatPanel from "../../components/FlatPanel";

const ETF_HEADER = "VestFolio aus ETFs";
const ETF_TEXT =
  "Mit unseren ETF-VestFolios investierst du in eines von sieben breit gestreuten Portfolios aus passiv verwalteten Indexfonds.";
const ETF_IMG = "prod-passiv-mo.png";

const GREEN_HEADER = "GreenFolio";
const GREEN_TEXT =
  "Mit unseren GreenFolios investierst du ausschließlich in nachhaltige Fonds, die sich dem Schutz von Natur und Menschenrechten widmen.";
const GREEN_IMG = "prod-green-mo.png";

const AKTIV_HEADER = "VestFolio aus aktiv verwalteten Fonds";
const AKTIV_TEXT =
  "Mit unseren aktiven VestFolios investierst du in eines von sieben breit gestreuten Portfolios aus aktiv verwalteten Fonds.";
const AKTIV_IMG = "prod-aktiv-mo.png";

// { translate: [0, -15, -5] },
// { rotateY: 0 },
// { rotateX: -90 }

class PortfolioOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotationValue: new Animated.Value(0),
      translateY: new Animated.Value(0),
      translateZ: new Animated.Value(-30)
    };
  }

  slideDown() {
    Animated.parallel([
      Animated.spring(this.state.rotationValue, {
        toValue: -90,
        friction: 3
      }),
      Animated.timing(this.state.translateY, {
        toValue: -15,
        duration: 1000
      }),
      Animated.timing(this.state.translateZ, {
        toValue: -10,
        duration: 1000
      })
    ]).start();
  }

  handleClick() {
    selectType();
    slideDown();
  }

  render() {
    return (
      <VrButton onClick={() => this.slideDown()}>
        <Animated.View
          style={{
            flexDirection: "row",
            transform: [
              { translateY: this.state.translateY },
              { translateZ: this.state.translateZ },
              { rotateX: this.state.rotationValue }
            ],
            alignItems: "center",
            layoutOrigin: [0.5, 0.5],
            opacity: 0.9
          }}
        >
          <FlatPanel header={ETF_HEADER} text={ETF_TEXT} img={ETF_IMG} />
          <FlatPanel header={GREEN_HEADER} text={GREEN_TEXT} img={GREEN_IMG} />
          <FlatPanel header={AKTIV_HEADER} text={AKTIV_TEXT} img={AKTIV_IMG} />
        </Animated.View>
      </VrButton>
    );
  }
}

export default connect(null)(PortfolioOverView);
