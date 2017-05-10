import React from "react";
import {
  View,
  Image,
  Text,
  CylindricalPanel,
  Animated,
  VrButton
} from "react-vr";
import CylindricPanel from "./CylindricPanel";

class ChartPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0)
    };
  }

  bounce() {
    this.state.bounceValue.setValue(1.1); // Start large
    Animated.spring(
      // Base: spring, decay, timing
      this.state.bounceValue, // Animate `bounceValue`
      {
        toValue: 1, // Animate to smaller size
        friction: 2 // Bouncier spring
      }
    ).start(); // Start the animation
  }
  componentDidMount() {
    this.bounce();
  }
  render() {
    const styles = {
      headerStyle: {
        fontSize: 100,
        fontWeight: "400",
        paddingLeft: 0.2,
        paddingRight: 0.2,
        textAlign: "center",
        textAlignVertical: "center"
      },
      imageStyle: {
        opacity: 0.95,
        width: 1400,
        height: 800,
        transform: [
          // `transform` is an ordered array
          { scale: this.state.bounceValue } // Map `bounceValue` to `scale`
        ]
      }
    };

    return (
      <CylindricPanel rotate={this.props.rotate} index={this.props.index}>
        <Text style={styles.headerStyle}>
          {this.props.header}
        </Text>
        <VrButton onEnter={() => this.bounce()}>
          <Animated.Image
            style={styles.imageStyle}
            source={{
              uri: this.props.uri
            }}
          />
        </VrButton>
      </CylindricPanel>
    );
  }
}

export default ChartPanel;
