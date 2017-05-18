import React, { Component } from "react";
import { Pano, Text, View, Animated, VrButton, StyleSheet } from "react-vr";
import { connect } from "react-redux";
import {
  fetchPortfolios,
  selectPortfolioVariation
} from "../../store/actions/simulation";

import FlatPanel from "../../components/FlatPanel";
import PortfolioVariation from "../../components/PortfolioVariation";
import Portfolio from "../../components/Portfolio";

const PortfolioVariationList = [
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

class PortfolioOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateVariations: {
        rotationValue: new Animated.Value(0),
        translateY: new Animated.Value(0),
        translateZ: new Animated.Value(-30)
      },
      animatePortfolios: {
        translateY: new Animated.Value(0),
        opacity: new Animated.Value(0)
      }
    };
  }

  componentDidMount() {
    this.springOnRender();
    return this.props.fetchPortfolios();
  }

  slideToFloor() {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(this.state.animateVariations.rotationValue, {
          toValue: -45,
          friction: 6
        }),
        Animated.spring(this.state.animateVariations.translateY, {
          toValue: 0,
          friction: 3,
          duration: 1000
        })
      ]),
      // Animated.timing(this.state.animateVariations.translateZ, {
      //   toValue: -30,
      //   duration: 2000
      // })
    ]).start();
  }

  springOnRender() {
    Animated.spring(this.state.animateVariations.rotationValue, {
      toValue: 6,
      friction: 1
    }).start();
  }

  dropDown() {
    this.state.animatePortfolios.translateY.setValue(200);
    Animated.parallel([
      Animated.spring(this.state.animatePortfolios.translateY, {
        toValue: 2,
        friction: 8
      }),
      Animated.timing(this.state.animatePortfolios.opacity, {
        toValue: 0.9,
        duration: 2000
      })
    ]).start();
  }

  handleVariationClick(variation) {
    this.props.selectPortfolioVariation(variation);
    this.slideToFloor();
    this.dropDown();
  }

  handlePortfolioClick(portoflio) {
    // this.props.selectPortfolioVariation(variation);
    this.slideToFloor();
  }

  renderVariationPanels() {
    return PortfolioVariationList.map(variation => (
      <VrButton
        key={variation.type}
        onClick={() => this.handleVariationClick(variation.type)}
      >
        <FlatPanel color="slateblue">
          <PortfolioVariation
            header={variation.header}
            text={variation.text}
            img={variation.img}
          />
        </FlatPanel>
      </VrButton>
    ));
  }

  renderPortfolioPanels() {
    if (this.props.portfolios.length !== 0) {
      return this.props.portfolios.map(portfolio => (
        <VrButton key={portfolio.name} onClick={() => "hello"}>
          <FlatPanel color="tomato">
            <Portfolio
              name={portfolio.name}
              assetAllocation={portfolio.assetAllocation}
            />
          </FlatPanel>
        </VrButton>
      ));
    }
  }

  render() {
    return (
      <View style={{ flexDirection: "column", justifyContent: "center" }}>

        <Animated.View style={this.portfolioStyles()}>
          {this.renderPortfolioPanels()}
        </Animated.View>

        <Animated.View style={this.variationStyles()}>
          {this.renderVariationPanels()}
        </Animated.View>
      </View>
    );
  }

  variationStyles = () => ({
    flexDirection: "row",
    transform: [
      { translateY: this.state.animateVariations.translateY },
      { translateZ: this.state.animateVariations.translateZ },
      { rotateX: this.state.animateVariations.rotationValue }
    ],
    alignItems: "center",
    layoutOrigin: [0.5, 0.5],
    opacity: 0.9
  });

  portfolioStyles = () => ({
    flexDirection: "row",
    transform: [
      { translateY: this.state.animatePortfolios.translateY },
      { translateZ: -35 }
    ],
    alignItems: "center",
    layoutOrigin: [0.5, 0.5],
    opacity: this.state.animatePortfolios.opacity
  });
}

const mapStateToProps = state => ({
  selectedVariation: state.simulation_data.selectedPortfolioVariation,
  portfolios: state.simulation_data.portfolios.byVariation
});

export default connect(mapStateToProps, {
  fetchPortfolios,
  selectPortfolioVariation
})(PortfolioOverView);
