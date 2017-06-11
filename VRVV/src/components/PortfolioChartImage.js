import React from "react";
import { View, Text, Image } from "react-vr";

class PortfolioChartImage extends React.Component {
  /**
   * Returns a loading-indicator if chartType is undefined. If this is not the case
   * it the function returns a String - with the passed chartType. 
   */
  renderText(chartType, portfolioName) {
    if (chartType === undefined) {
      return "Lade...";
    }

    return `${chartType === "performance" ? "Wertentwicklung" : "Anlageaufteilung"} des ${portfolioName}`;
  }

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: 1200,
            height: 800,
            backgroundColor: "black",
            opacity: 0.7,
            borderRadius: 10
          }}
        />
        <View style={{ position: "absolute" }}>
          <Text
            style={{
              //position: "absolute",
              fontSize: 60,
              fontWeight: "400",
              textAlign: "center",
              textAlignVertical: "top",
              margin: 50
            }}
          >
            {this.renderText(this.props.chartType, this.props.portfolioName)}
          </Text>

          {this.props.image !== undefined &&
            <Image
              style={{ width: 1000, height: 600 }}
              source={{ uri: `data:image/png;base64,${this.props.image}` }}
            />}

        </View>

      </View>
    );
  }
}

export default PortfolioChartImage;
