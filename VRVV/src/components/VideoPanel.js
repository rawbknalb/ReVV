import React from "react";
import {
  View,
  Text,
  Video,
  VideoControl,
  Animated,
  MediaPlayerState
} from "react-vr";

class VideoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPosition: {
        translateY: 2,
        translateZ: new Animated.Value(-10)
      },
      playerState: new MediaPlayerState({ autoPlay: false, muted: false }) // init with muted, autoPlay
    };
  }

  animateAfterEnd() {
    Animated.spring(this.state.videoPosition.translateZ, {
      toValue: -15,
      spring: 2
    }).start();
  }

  render() {
    const videoWidth = 8;

    return (
      <Animated.View style={this.videoContainerStyle()}>
        <Text
          style={{
            fontSize: 0.6,
            fontWeight: "200",
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center"
            //transform: [{ translate: [0, 5, -12] }]
          }}
        >
          Warum VisualVest...
        </Text>
        <Video
          style={{ height: 4.5, width: videoWidth }}
          source={{ uri: "../../static_assets/VisualVest_vid.webm" }}
          playerState={this.state.playerState}
          onEnded={() => this.animateAfterEnd()}
        />
        <VideoControl
          style={{ height: 0.3, width: videoWidth }}
          playerState={this.state.playerState}
        />
      </Animated.View>
    );
  }

  videoContainerStyle = () => ({
    alignItems: "center",
    layoutOrigin: [0.5, 0.5, 0],
    transform: [
      { translateX: -8 },
      { translateY: this.state.videoPosition.translateY },
      { translateZ: this.state.videoPosition.translateZ },
      { rotateY: 30 }
    ]
  });
}

export default VideoPanel;
