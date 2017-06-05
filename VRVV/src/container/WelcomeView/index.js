import React from "react";
import { asset, Text, View, Image } from "react-vr";
import { connect } from "react-redux";

import { WelcomeViewHeadlines } from "../../components/Headlines";

import VideoPanel from "../../components/VideoPanel";
import CurvedPanel from "../../components/CurvedPanel"

class WelcomeView extends React.Component {
  render() {
    return (
      <View>
        <WelcomeViewHeadlines />
        <VideoPanel videoWebm="Warum_VisualVest_vid.Webm" videoMp4="Warum_VisualVest_vid.mp4"/>
      </View>
    );
  }
}

export default WelcomeView;
