import React from "react";
import { Animated } from "react-vr";

const FadeHOC = WrappedComponent => {
  return class FadeHOC extends React.Component {
    state = { opacity: new Animated.Value(0) };

    componentDidMount() {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1000
      }).start();
    }

    componentWillUnmount() {
      console.log("hello")
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 3000
      }).start();
    }

    render() {
      return (
        <Animated.View style={{ opacity: this.state.opacity }}>
          <WrappedComponent />
        </Animated.View>
      );
    }
  };
};

export default FadeHOC;
