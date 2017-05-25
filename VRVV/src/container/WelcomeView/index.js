import React from "react";
import { asset, Text, View, Image } from "react-vr";
import { connect } from "react-redux";

import { WelcomeViewHeadlines } from "../../components/Headlines";

class WelcomeView extends React.Component {
  render() {
    return (
      <View>
        <WelcomeViewHeadlines />
      </View>
    );
  }
}

export default WelcomeView;
