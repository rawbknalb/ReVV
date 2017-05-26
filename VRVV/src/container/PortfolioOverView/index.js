import React, { Component } from "react";
import {
  Pano,
  Text,
  View,
  Animated,
  VrButton,
  StyleSheet,
  Plane
} from "react-vr";
import { connect } from "react-redux";
import {
  fetchPortfolios,
  selectPortfolioVariation,
  unselectPortfolio
} from "../../store/actions/simulation";

import PortfolioVariation from "../../components/PortfolioVariation";
import Portfolio from "../../components/Portfolio";
import CurvedPanel from "../../components/CurvedPanel";
import { PortfolioOverViewHeadlines } from "../../components/Headlines";

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
      newMount: false,
      animateVariations: {
        rotationValue: new Animated.Value(0),
        translateY: new Animated.Value(0),
        translateZ: new Animated.Value(-10),
        opacity: new Animated.Value(0)
      },
      animatePortfolios: {
        translateY: new Animated.Value(0),
        opacity: new Animated.Value(0),
        borderWidth: new Animated.Value(0)
      },
      animateSelectedPortfolio: {
        translateZ: new Animated.Value(-1000),
        translateY: new Animated.Value(0),
        scale: new Animated.Value(1)
      }
    };
  }

  componentDidMount() {
    this.animateOnRender();
    this.setState({ newMount: true });
    return this.props.fetchPortfolios();
  }

  componentWillUnmount() {
    this.props.unselectPortfolio();
  }

  slideToFloor() {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(this.state.animateVariations.rotationValue, {
          toValue: 45,
          friction: 6
        }),
        Animated.spring(this.state.animateVariations.translateY, {
          toValue: 11,
          friction: 3,
          duration: 1000
        })
      ])
    ]).start();
  }

  animateOnRender() {
    Animated.parallel([
      Animated.spring(this.state.animateVariations.rotationValue, {
        toValue: 6,
        friction: 1
      }),
      Animated.timing(this.state.animateVariations.opacity, {
        toValue: 0.9,
        duration: 1000
      })
    ]).start();
  }

  dropTo_Y = 2;

  dropDown() {
    this.state.animatePortfolios.translateY.setValue(200);
    /**
     * If a portfolio is allready selected and dropDown() gets called
     * the panels should stop at a higher y-coordinate. If no portfolio
     * is selected with this call, the panels drop to a lower y-coordinate
     */
    Animated.parallel([
      Animated.spring(this.state.animatePortfolios.translateY, {
        toValue: Object.keys(this.props.selectedPortfolio).length !== 0
          ? 1.5
          : 0.5,
        friction: 8
      }),
      Animated.timing(this.state.animatePortfolios.opacity, {
        toValue: 0.9,
        duration: 2000
      })
    ]).start();
  }

  AnimateAfterPortfolioSelect() {
    this.state.animateSelectedPortfolio.scale.setValue(1.05);
    Object.keys(this.props.selectedPortfolio).length === 0 ||
      this.state.newMount
      ? Animated.parallel([
          Animated.spring(this.state.animatePortfolios.translateY, {
            toValue: 1.5,
            friction: 8
          }),
          Animated.spring(this.state.animateSelectedPortfolio.translateZ, {
            toValue: 0,
            spring: 5,
            tension: 10
          }),
          Animated.spring(this.state.animateSelectedPortfolio.scale, {
            toValue: 1,
            friction: 2
          })
        ]).start()
      : Animated.spring(this.state.animateSelectedPortfolio.scale, {
          toValue: 1,
          friction: 2
          //tension: 0
        }).start();
  }

  handleVariationClick(variation) {
    this.props.selectPortfolioVariation(variation);
    this.slideToFloor();
    this.dropDown();
  }

  handlePortfolioClick(portoflio) {
    this.slideToFloor();
  }

  animateProgress() {
    this;
  }

  stopProgress() {}

  /**
   * Renders all Portfolio Variations. Maps over PortfolioVariationList 
   * (pre-defined) and returns each Variation inside a VrButton Wrapper
   */
  renderVariationPanels() {
    return PortfolioVariationList.map(variation => (
      <VrButton
        key={variation.type}
        onClick={() => this.handleVariationClick(variation.type)}
      >
        <PortfolioVariation
          header={variation.header}
          text={variation.text}
          img={variation.img}
          color="slateblue"
        />
      </VrButton>
    ));
  }

  /**
   * Renders all Portfolios as small Panels. Only the unselected Portfolios
   * should be rendered. First filter only the portfolios which don't match
   * with the selectedPortfolio ID. Then map over this filtered Array and return
   * each Portfolio-Component
   */
  renderPortfolioPanels() {
    if (this.props.portfolios.length !== 0) {
      return this.props.portfolios
        .filter(portfolio => portfolio.id !== this.props.selectedPortfolio.id)
        .map((portfolio, index) => (
          <VrButton
            key={portfolio.name}
            onClick={() => this.AnimateAfterPortfolioSelect()}
          >
            <Portfolio
              portfolios={this.props.portfolios}
              portfolioId={portfolio.id}
              name={portfolio.name}
              title={portfolio.title}
              assetAllocation={portfolio.assetAllocation}
              color="tomato"
              index={index}
              margin={0.05}
              selectedPortfolio={this.props.selectedPortfolio}
              portfolio={portfolio}
            />
          </VrButton>
        ));
    }
  }

  renderSelectedPortfolio() {
    if (Object.keys(this.props.selectedPortfolio).length !== 0) {
      return (
        <Portfolio
          title={this.props.selectedPortfolio.title}
          selectedPortfolio={this.props.selectedPortfolio}
          portfolioId={this.props.selectedPortfolio.id}
          assetAllocation={this.props.selectedPortfolio.assetAllocation}
          name={this.props.selectedPortfolio.name}
          color="tomato"
        />
      );
    }
  }

  render() {
    return (
      <View>
        <View>
          <PortfolioOverViewHeadlines />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              layoutOrigin: [0.5, 0.5],
              position: "absolute"
            }}
          >
            <Animated.View style={this.portfolioStyles()}>
              <View>
                <Text style={{ fontSize: 0.2 }}>Geringeres Risiko</Text>
                <Text style={{ fontSize: 0.2 }}>Geringere Rendite</Text>
              </View>
              {this.renderPortfolioPanels()}
              <View>
                <Text style={{ fontSize: 0.2 }}>Höheres Risiko</Text>
                <Text style={{ fontSize: 0.2 }}>Höhere Rendite</Text>
              </View>

            </Animated.View>

            <Animated.View style={this.selectedPortfolioStyles()}>
              <View style={{ transform: [{ translate: [0, 0, -10] }] }}>
                {this.renderSelectedPortfolio()}
              </View>
            </Animated.View>

          </View>
          <Animated.View style={this.variationStyles()}>
            {this.renderVariationPanels()}
          </Animated.View>
        </View>
      </View>
    );
  }

  variationStyles = () => ({
    flexDirection: "row",
    position: "absolute",
    transform: [
      { translateY: this.state.animateVariations.translateY },
      { translateZ: this.state.animateVariations.translateZ },
      { rotateX: this.state.animateVariations.rotationValue }
    ],
    alignItems: "center",
    layoutOrigin: [0.5, 0.5],
    opacity: this.state.animateVariations.opacity
  });

  portfolioStyles = () => ({
    flexDirection: "row",
    position: "absolute",
    transform: [
      { translateY: this.state.animatePortfolios.translateY },
      { translateZ: -10 }
    ],
    alignItems: "center",
    justifyContent: "center",
    //height: 0,
    width: 3,
    //layoutOrigin: [0.5, 0.5],
    opacity: this.state.animatePortfolios.opacity
  });

  selectedPortfolioStyles = () => ({
    transform: [
      { translateZ: this.state.animateSelectedPortfolio.translateZ },
      { translateY: -1 },
      { scaleY: this.state.animateSelectedPortfolio.scale }
      //{ scaleX: this.state.animateSelectedPortfolio.scale }
    ]
  });
}

const mapStateToProps = state => ({
  selectedVariation: state.simulation_data.selectedPortfolioVariation,
  portfolios: state.simulation_data.portfolios.byVariation,
  selectedPortfolio: state.simulation_data.portfolios.selected.metaData
});

export default connect(mapStateToProps, {
  fetchPortfolios,
  selectPortfolioVariation,
  unselectPortfolio
})(PortfolioOverView);
