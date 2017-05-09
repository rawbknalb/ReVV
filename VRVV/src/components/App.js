import React from "react";
import {
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image,
  Plane,
  Box,
  CylindricalPanel
} from "react-vr";
import { SmoothLine } from "react-native-pathjs-charts";

//import Dashboard from "./dashboard/Dashboard"

class App extends React.Component {
  render() {
    let data = [
      [
        {
          x: -10,
          y: -1000
        },
        {
          x: -9,
          y: -729
        },
        {
          x: -8,
          y: -512
        },
        {
          x: -7,
          y: -343
        },
        {
          x: -6,
          y: -216
        },
        {
          x: -5,
          y: -125
        },
        {
          x: -4,
          y: -64
        },
        {
          x: -3,
          y: -27
        },
        {
          x: -2,
          y: -8
        },
        {
          x: -1,
          y: -1
        },
        {
          x: 0,
          y: 0
        },
        {
          x: 1,
          y: 1
        },
        {
          x: 2,
          y: 8
        },
        {
          x: 3,
          y: 27
        },
        {
          x: 4,
          y: 64
        },
        {
          x: 5,
          y: 125
        },
        {
          x: 6,
          y: 216
        },
        {
          x: 7,
          y: 343
        },
        {
          x: 8,
          y: 512
        },
        {
          x: 9,
          y: 729
        },
        {
          x: 10,
          y: 1000
        }
      ],
      [
        {
          x: -10,
          y: 100
        },
        {
          x: -9,
          y: 81
        },
        {
          x: -8,
          y: 64
        },
        {
          x: -7,
          y: 49
        },
        {
          x: -6,
          y: 36
        },
        {
          x: -5,
          y: 25
        },
        {
          x: -4,
          y: 16
        },
        {
          x: -3,
          y: 9
        },
        {
          x: -2,
          y: 4
        },
        {
          x: -1,
          y: 1
        },
        {
          x: 0,
          y: 0
        },
        {
          x: 1,
          y: 1
        },
        {
          x: 2,
          y: 4
        },
        {
          x: 3,
          y: 9
        },
        {
          x: 4,
          y: 16
        },
        {
          x: 5,
          y: 25
        },
        {
          x: 6,
          y: 36
        },
        {
          x: 7,
          y: 49
        },
        {
          x: 8,
          y: 64
        },
        {
          x: 9,
          y: 81
        },
        {
          x: 10,
          y: 100
        }
      ]
    ];

    return (
      <View>
        <Pano source={asset("tasmania.jpg")} />
        <Plane dimWidth={10} dimHeight={10} />
        <Box
          style={{
            opacity: 0.1,
            color: "papayawhip",
            transform: [{ translate: [-7.5, 1, 0] }]
          }}
          dimWidth={0.2}
          dimDepth={5}
          dimHeight={3}
        />
        <Text
          style={{
            fontSize: 0.3,
            color: "azure",
            transform: [{ translate: [-1.65, -1.1, -1.2] }]
          }}
        >
          GreenFolio
        </Text>
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 6, -10] }]
          }}
        >
          VisualVest
        </Text>
        
        <CylindricalPanel
          layer={{
            width: 2000,
            height: 1000,
            density: 4096,
            radius: 3
          }}
          style={{
            position: "absolute",
            transform: [{ translate: [0, 0, -2] }]
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: 100,
                fontWeight: "300"
              }}
            >
              History Chart
            </Text>
            <View
              style={{
                opacity: 0.8,
                width: 1050,
                height: 720,
                backgroundColor: "red"
                // alignItems: "stretch",
                //justifyContent: "flex-end"
              }}
            >
              <Image
                style={{
                  borderRadius: 10,
                  borderWidth: 2,
                  width: "100%",
                  height: "100%"
                }}
                source={{
                  uri: "https://facebook.github.io/react/img/logo_og.png"
                }}
              />
            </View>
          </View>
        </CylindricalPanel>
      </View>
    );
  }
}

export default App;
