import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";

const FullScreenBg = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri: "https://www.freecodecamp.org/news/content/images/size/w2000/2024/05/article-1-rnsplash-2.png",
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')
      >
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            React Native Full Screen Background Image
          </Text>
          <View style={styles.centerContentStyle}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png",
              }}
              style={{
                width: 40,
                height: 40,
                marginTop: 90,
              }}
            />
            <Text style={styles.TextStyle}>AboutReact</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  centerContentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  TextStyle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});

export default FullScreenBg;
