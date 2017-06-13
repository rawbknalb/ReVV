import React from "react";
import { asset, Text, View, Image } from "react-vr";
import { connect } from "react-redux";

import { WelcomeViewHeadlines } from "../../components/Headlines";

import VideoPanel from "../../components/VideoPanel";
import CurvedPanel from "../../components/CurvedPanel";

class WelcomeView extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{ transform: [{ translate: [0, 1, -5] }, { rotateY: 15 }] }}
        >
          <CurvedPanel
            width={3000}
            height={1000}
            density={10000}
            justifyContent="space-around"
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  width: 1000,
                  height: 1000,
                  backgroundColor: "black",
                  opacity: 0.8,
                  borderRadius: 20
                }}
              />
              <View style={{ position: "absolute" }}>
                <Text
                  style={{
                    fontSize: 60,
                    fontWeight: "200",
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: "left",
                    textAlignVertical: "center"
                  }}
                >
                  Wir sind ein junges Unternehmen mit einem bunt gemischten Team aus Finanzprofis und digitalen Experten. Unser Ziel ist es, digitale Anlageberatung so individuell wie möglich für dich zu gestalten und unabhängig von einzelnen Fonds-Anbietern zu bleiben. Zusätzlich verbindet uns die Leidenschaft für soziale und ökologische Engagements. Daher bieten wir dir eine moderne, sichere und nachhaltige Geldanlage an.
                </Text>
              </View>
            </View>
            <WelcomeViewHeadlines />

          </CurvedPanel>
        </View>
        <VideoPanel
          title="Warum VisualVest..."
          x={20}
          y={-2}
          rotateY={-45}
          videoWebm="Warum_VisualVest_vid.Webm"
          videoMp4="Warum_VisualVest_vid.mp4"
        />
      </View>
    );
  }
}

export default WelcomeView;
