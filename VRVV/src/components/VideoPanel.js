import React from "react";
import {
  asset,
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
        translateX: this.props.x ? this.props.x : 0,
        translateY: this.props.y ? this.props.y : 0,
        translateZ: this.props.z ? new Animated.Value(this.props.z) : new Animated.Value(-20)
      },
      playerState: new MediaPlayerState({ autoPlay: false, muted: false }) // init with muted, autoPlay
    };
  }

  animateAfterEnd() {
    Animated.spring(this.state.videoPosition.translateZ, {
      toValue: -20,
      spring: 2
    }).start();
  }

  render() {
    const videoWidth = 15;
    const videoHeight = videoWidth / (16 / 9);
    return (
      <Animated.View style={this.videoContainerStyle()}>
        <View
          style={{
            width: videoWidth * 1.2,
            height: videoHeight * 1.3,
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.8,
            borderRadius: 0.2
          }}
        />
        <Text
          style={{
            fontSize: 1,
            fontWeight: "bold",
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center"
            //transform: [{ translate: [0, 5, -12] }]
          }}
        >
          {this.props.title}
        </Text>
        <Video
          style={{ height: videoHeight, width: videoWidth }}
          source={[
            asset(this.props.videoWebm, { format: "webm" }),
            asset(this.props.videoMp4, { format: "mp4" })
          ]}
          playerState={this.state.playerState}
          onEnded={() => this.animateAfterEnd()}
        />
        <VideoControl
          style={{ height: videoHeight / 8, width: videoWidth }}
          playerState={this.state.playerState}
        />
      </Animated.View>
    );
  }

  videoContainerStyle = () => ({
    alignItems: "center",
    position: "absolute",
    layoutOrigin: [0.5, 0.5, 0],
    transform: [
      { translateX: this.state.videoPosition.translateX },
      { translateY: this.state.videoPosition.translateY },
      { translateZ: this.state.videoPosition.translateZ },
      { rotateX: this.props.rotateX ? this.props.rotateX : 0 }
    ]
  });
}

export default VideoPanel;
