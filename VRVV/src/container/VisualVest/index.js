import React, { Component } from "react";
import { asset, Text, View, Image, Plane, VrButton, Animated } from "react-vr";

import CurvedPanel from "../../components/CurvedPanel";
import { REASON_FOR_VV } from "../../utils";

class VisualVest extends Component {
  constructor() {
    super();
    this.state = {
      clickedReason: "Sicherheit",
      clickedSubReason: null,
      open: false,
      opacityValue: new Animated.Value(0),
      widthValue: new Animated.Value(0)
    };
  }

  animateReasonDetail() {
    Animated.parallel([
      Animated.spring(this.state.widthValue, { toValue: 1500, spring: 10 }),
      Animated.timing(this.state.opacityValue, {
        toValue: 1,
        timing: 1
      })
    ]).start();
  }

  handleSubReasonClick(subReason) {
    this.animateReasonDetail();
    this.setState({ clickedSubReason: subReason });
  }

  reasonDetailStyle = () => ({
    width: this.state.widthValue,
    opacity: this.state.opacityValue
  });

  renderReasonDetail() {
    return (
      <Animated.View
        style={[
          {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 1000,
            width: this.state.widthValue,
            opacity: this.state.opacityValue
          }
        ]}
      >
        <Animated.View
          style={{
            position: "absolute",
            borderRadius: 30,
            width: this.state.widthValue,
            height: 1000,
            backgroundColor: "black",
            opacity: 0.8
          }}
        />
        {this.renderSubReasonText()}
      </Animated.View>
    );
  }

  renderSubReasonText() {
    if (this.state.clickedSubReason !== null) {
      /**
       * For each parent Reason Element of the REASON Array the inner 
       * SubReason Array gets searched/find for the right SubReason from the
       * component state. Each iteration you get an Object or undefined. Only if 
       * the matchedSubReason is not undefined, assign the new obj to the found Object.
       */
      const matchedSubReason = REASON_FOR_VV.reduce((obj, reason) => {
        const matchedSubReason = reason.sub_reasons.find(
          subReason => subReason.sub_reason === this.state.clickedSubReason
        );

        if (matchedSubReason !== undefined) {
          obj = matchedSubReason;
        }
        return obj;
      }, {});

      const subReasonText = matchedSubReason.text;
      const subReasonImg = matchedSubReason.img;

      return (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              margin: 10,
              width: 900,
              height: 500,
              borderRadius: 30
            }}
            source={asset(subReasonImg)}
          />
          <Text
            style={{
              margin: 50,
              fontWeight: "400",
              fontSize: 50,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {subReasonText}
          </Text>
        </View>
      );
    }
  }

  renderReasons() {
    return REASON_FOR_VV.map(reason => (
      <VrButton onClick={() => this.setState({ clickedReason: reason.reason })}>
        <Text
          key={reason.reason}
          style={{
            margin: 40,
            fontSize: 80,
            textAlign: "center",
            textAlignVertical: "center",
            color: this.state.clickedReason === reason.reason
              ? "tomato"
              : "white"
          }}
        >
          {reason.reason}
        </Text>
      </VrButton>
    ));
  }

  renderSubReasons() {
    if (this.state.clickedReason !== null) {
      const filteredReasons = REASON_FOR_VV.filter(
        reason => reason.reason === this.state.clickedReason
      );
      const subReasons = filteredReasons[0].sub_reasons;

      return subReasons.map(subReason => (
        <VrButton
          key={subReason.order}
          onClick={() =>
            this.state.clickedSubReason === null
              ? this.handleSubReasonClick(subReason.sub_reason)
              : this.setState({ clickedSubReason: subReason.sub_reason })}
          style={{
            borderColor: this.state.clickedSubReason === subReason.sub_reason
              ? "tomato"
              : "white",
            borderWidth: 3,
            borderRadius: 10,
            margin: 10
          }}
        >
          <Text
            style={{
              margin: 40,
              fontSize: 70,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {subReason.sub_reason}
          </Text>
        </VrButton>
      ));
    }
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          transform: [{ translate: [0, 0, -3] }]
        }}
      >
        <View style={{ transform: [{ rotateY: 0 }, { translate: [0, 0, 0] }] }}>
          <CurvedPanel
            width={3200}
            height={1000}
            density={8000}
            justifyContent="space-around"
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: 1500,
                height: 1000
              }}
            >
              <View
                style={{
                  position: "absolute",
                  borderRadius: 30,
                  width: 1500,
                  height: 1000,
                  backgroundColor: "black",
                  opacity: 0.8
                }}
              />
              <Text
                style={{
                  margin: 10,
                  fontSize: 80,
                  textAlign: "right",
                  textAlignVertical: "center",
                  color: "white"
                }}
              >
                Gute Gründe für VisualVest
              </Text>
              <Plane dimWidth={1000} dimHeight={5} />
              <View
                style={{
                  flexDirection: "row",
                  width: 1500,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {this.renderReasons()}
              </View>
              <View
                style={{
                  width: 1000,
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >

                {this.renderSubReasons()}
              </View>
            </View>
            {this.renderReasonDetail()}

          </CurvedPanel>
        </View>
      </View>
    );
  }
}

export default VisualVest;
