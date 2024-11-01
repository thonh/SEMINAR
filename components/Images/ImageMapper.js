import { View, Text } from "react-native";
import React, { Component } from "react";
import ImageMapper from "react-native-image-mapper";

class ImageMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAreaId: [],
    };
  }

  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  mapperAreaClickHandler = async (item, idx, event) => {
    const { selectedAreaId } = this.state;
    if (Array.isArray(selectedAreaId)) {
      const indexInState = selectedAreaId.indexOf(item.id);
      if (indexInState !== -1) {
        console.log("Removing id", item.id);
        this.setState({
          selectedAreaId: [
            ...selectedAreaId.slice(0, indexInState),
            ...selectedAreaId.slice(indexInState + 1),
          ],
        });
      } else {
        alert(`Clicked Item Id: ${item.name}`);
        console.log("Setting Id", item.id);
        this.setState({ selectedAreaId: [...selectedAreaId, item.id] });
      }
    } else {
      if (item.id === selectedAreaId) {
        this.setState({ selectedAreaId: null });
      } else {
        this.setState({ selectedAreaId: item.id });
      }
    }
  };
  render() {
    const RECTANGLE_MAP = [
      {
        id: "0",
        name: "Head",
        shape: "rectangle",
        x2: 150,
        y2: 50,
        x1: 100,
        y1: 15,
        prefill: this.getRandomColor(),
        fill: "blue",
      },
    ];

    return (
      <View style={{ flex: 1, alignItems: "center", padding: 30 }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Image Mapper Example in React Native
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 20,
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          www.aboutreact.com
        </Text>
        <ImageMapper
          imgHeight={551}
          imgWidth={350}
          imgSource={{
            uri: "https://gundamviet.vn/wp-content/uploads/2021/07/Mo-Hinh-Lap-Rap-Gundam-Red-Astray-Kai-Mg-1100-Hang-Jijia-TQ-ft.jpg",
          }}
          imgMap={RECTANGLE_MAP}
          onPress={(item, idx, event) =>
            this.mapperAreaClickHandler(item, idx, event)
          }
          containerStyle={{ top: 10 }}
          selectedAreaId={this.state.selectedAreaId}
          multiselect
        />
      </View>
    );
  }
}

export default ImageMap;
