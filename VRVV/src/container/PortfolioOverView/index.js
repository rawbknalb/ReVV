import React, { Component } from "react";
import { Pano, Text, View, Animated, VrButton, StyleSheet } from "react-vr";
import { connect } from "react-redux";
import {
  fetchPortfolios,
  selectPortfolioVariation,
  unselectPortfolio,
  setSelectedPortfolio,
  fetchHistoryData,
  fetchPortfolioCharts,
  fetchAssetAllocationImage
} from "../../store/actions/simulation";

import { PortfolioVariationList } from "../../utils";

import PortfolioVariation from "../../components/Portfolio/PortfolioVariation";
import PortfolioSelectButton
  from "../../components/Portfolio/PortfolioSelectButton";
import SelectedPortfolio from "../../components/Portfolio/SelectedPortfolio";
import CurvedPanel from "../../components/CurvedPanel";
import PortfolioChartPanel from "../../components/PortfolioChartPanel";
import { PortfolioOverViewHeadlines } from "../../components/Headlines";

class PortfolioOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMount: false,
      animateVariations: {
        rotationValue: new Animated.Value(0),
        translateY: new Animated.Value(0),
        translateZ: new Animated.Value(-9),
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
      },
      animateHistoryImage: {
        opacity: new Animated.Value(0)
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

  slideToCeiling() {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(this.state.animateVariations.rotationValue, {
          toValue: -45,
          friction: 6
        }),
        Animated.spring(this.state.animateVariations.translateY, {
          toValue: -4,
          friction: 3,
          duration: 1000
        })
      ])
    ]).start();
  }

  animateOnRender() {
    Animated.parallel([
      Animated.spring(this.state.animateVariations.rotationValue, {
        toValue: 1,
        friction: 3
      }),
      Animated.timing(this.state.animateVariations.opacity, {
        toValue: 1,
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
          ? 2
          : 0.5,
        friction: 8
      }),
      Animated.timing(this.state.animatePortfolios.opacity, {
        toValue: 1,
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
            toValue: 2.5,
            friction: 8
          }),
          Animated.spring(this.state.animateSelectedPortfolio.translateZ, {
            toValue: 0,
            spring: 5,
            tension: 2
          }),
          Animated.spring(this.state.animateSelectedPortfolio.scale, {
            toValue: 1,
            friction: 2
          })
        ]).start()
      : Animated.spring(this.state.animateSelectedPortfolio.scale, {
          toValue: 1,
          friction: 2
        }).start();
  }

  AnimateAfterSelectedPortfolioClick() {
    Animated.spring(this.state.animateSelectedPortfolio.translateY, {
      toValue: 3.8,
      spring: 5,
      tension: 2
    }).start();
  }

  handleVariationClick(variation) {
    this.props.selectPortfolioVariation(variation);
    this.slideToCeiling();
    this.dropDown();
  }

  /**
   * First selects the clicked Portfolio with the Portfolio Id
   * Then fetches the HistoryData. 
   * If historyImages already exist (!= null), the new Portfolio History Images
   * should get fetched. Therefore the historyImage is passed to the Action Creator
   */
  selectPortfolio(portfolio) {
    this.props.setSelectedPortfolio(portfolio.id);
    this.props.fetchHistoryData(
      portfolio.id,
      null,
      this.props.portfolioCharts,
      portfolio.assetAllocation
    );
    this.AnimateAfterPortfolioSelect();
  }

  handleSelectedPortfolioClick(history, assetAllocation) {
    this.fetchPortfolioCharts(history, assetAllocation);
    this.AnimateAfterSelectedPortfolioClick();
  }

  fetchPortfolioCharts(history, assetAllocation) {
    this.props.fetchPortfolioCharts(history, assetAllocation);
    Animated.timing(this.state.animateHistoryImage.opacity, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  /**
   * Renders all Portfolio Variations. Maps over PortfolioVariationList 
   * (pre-defined) and returns each Variation inside a VrButton Wrapper
   */
  renderVariationPanels() {
    return (
      <CurvedPanel
        width={3500}
        height={800}
        density={9000}
        flexDirection="row"
        justifyContent="space-between"
      >
        {PortfolioVariationList.map(variation => (
          <VrButton
            key={variation.type}
            onClick={() => this.handleVariationClick(variation.type)}
          >
            <PortfolioVariation
              selectedVariation={this.props.selectedVariation.variation}
              type={variation.type}
              header={variation.header}
              text={variation.text}
              img={variation.img}
              color="black"
            />
          </VrButton>
        ))}
      </CurvedPanel>
    );
  }

  /**
   * Renders all Portfolios as small Panels. Only the unselected Portfolios
   * should be rendered. First filter only the portfolios which don't match
   * with the selectedPortfolio ID. Then map over this filtered Array and return
   * each Portfolio-Component.
   * 
   * OnClick: Calls selectPortfolio and passes the portfolio Id to the
   * Redux Action Creator
   */
  renderPortfolioPanels() {
    if (this.props.portfolios.length !== 0) {
      return this.props.portfolios
        .filter(portfolio => portfolio.id !== this.props.selectedPortfolio.id)
        .map((portfolio, index) => (
          <VrButton
            key={portfolio.name}
            onClick={() => this.selectPortfolio(portfolio)}
          >
            <PortfolioSelectButton
              color="black"
              index={index}
              margin={0.05}
              portfolio={portfolio}
            />
          </VrButton>
        ));
    }
  }

  renderPortfolioChartPanel() {
    if (this.props.portfolioCharts !== null) {
      return (
        <PortfolioChartPanel
          images={this.props.portfolioCharts}
          portfolioName={this.props.selectedPortfolio.name}
        />
      );
    }
  }

  /**
   * When clicked on the selected Portfolio, the Por tfolio History
   * Image should get fetched
   */
  renderSelectedPortfolio() {
    return (
      <SelectedPortfolio
        handleSelectedPortfolioClick={() =>
          this.handleSelectedPortfolioClick(
            this.props.selectedPortfolio.history,
            this.props.selectedPortfolio.assetAllocation
          )}
        selectedPortfolio={this.props.selectedPortfolio}
        color="black"
      />
    );
  }

  render() {
    return (
      <View>
        <View>
          {/*<PortfolioOverViewHeadlines />*/}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              layoutOrigin: [0.5, 0.5],
              position: "absolute"
            }}
          >
            {this.props.portfolios &&
              <Animated.View style={this.portfolioStyles()}>
                <View>
                  <Text style={{ fontSize: 0.2, color: "black" }}>
                    Geringeres Risiko
                  </Text>
                  <Text style={{ fontSize: 0.2, color: "black" }}>
                    Geringere Rendite
                  </Text>
                </View>
                {this.renderPortfolioPanels()}
                <View>
                  <Text style={{ fontSize: 0.2, color: "black" }}>
                    Höheres Risiko
                  </Text>
                  <Text style={{ fontSize: 0.2, color: "black" }}>
                    Höhere Rendite
                  </Text>
                </View>
              </Animated.View>}

            <Animated.View style={this.selectedPortfolioStyles()}>
              <View style={{ transform: [{ translate: [0, 0, -10] }] }}>
                {this.renderSelectedPortfolio()}
              </View>
            </Animated.View>

          </View>
          <Animated.View style={{ position: "absolute" }}>
            {this.renderPortfolioChartPanel()}
          </Animated.View>
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
      { translateY: this.state.animateSelectedPortfolio.translateY },
      { scaleY: this.state.animateSelectedPortfolio.scale }
      //{ scaleX: this.state.animateSelectedPortfolio.scale }
    ]
  });

  historyyImageStyle = () => ({
    position: "absolute",
    opacity: this.state.historyImage.opacity
  });
}

const mapStateToProps = state => ({
  selectedVariation: state.simulation_data.selectedPortfolioVariation,
  portfolios: state.simulation_data.portfolios.byVariation,
  selectedPortfolio: state.simulation_data.portfolios.selected.metaData,
  portfolioCharts: state.simulation_data.portfolioCharts
});

export default connect(mapStateToProps, {
  fetchPortfolios,
  selectPortfolioVariation,
  unselectPortfolio,
  setSelectedPortfolio,
  fetchHistoryData,
  fetchPortfolioCharts,
  fetchAssetAllocationImage
})(PortfolioOverView);
