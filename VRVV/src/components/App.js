import React from "react";
import { asset, Pano, Text, View } from "react-vr";
import { connect } from "react-redux";
import {
  fetchHistoryData,
  setHistoryRange,
  selectPortfolio
} from "../store/actions/simulation";

import ChartsWorld from "../world/ChartsWorld";

class App extends React.Component {
  // Only fetch HistoryData in case Portfolio is selected
  // initialy the selected Portfolio is the computed one
  componentDidMount() {
    if (this.props.selectedPortfolioId !== null) {
      this.props.fetchHistoryData(
        this.props.computedPortfolioId,
        this.props.selectedPortfolioId,
        this.props.historyRange
      );
    }
  }

  renderPanels() {
    const images = [
      { uri: "../static_assets/1yr.jpg", header: "Wertentwicklung 1 Jahr" },
      { uri: "../static_assets/3yrs.jpg", header: "Wertentwicklung 3 Jahre" },
      { uri: "../static_assets/maxyrs.jpg", header: "Wertentwicklung Maximal" }
    ];

    return images.map((image, index) => (
      <ChartPanel
        rotate="y"
        header={image.header}
        uri={image.uri}
        index={index}
      />
    ));
  }

  render() {
    return (
      <View>
        <Pano source={asset("tasmania.jpg")} />
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 9, -10] }]
          }}
        >
          VisualVest
        </Text>
        <ChartsWorld historyData={this.props.historyData} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  historyData: state.simulation_data.history,
  historyRange: state.simulation_data.historyRange,
  selectedPortfolioId: state.simulation_data.portfolios.selected.portfolioId,
  computedPortfolioId: state.simulation_data.portfolios.computed.portfolioId
});

export default connect(mapStateToProps, { fetchHistoryData, setHistoryRange })(
  App
);
