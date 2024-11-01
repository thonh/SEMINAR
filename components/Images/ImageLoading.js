import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

const ImageLoading = () => {
  const blurhash = "LEHV6nWB2";

  // Generate an array of 500 different image URIs
  const images = Array.from({ length: 500 }, (_, index) => ({
    id: index.toString(),
    uri: `https://picsum.photos/200?random=${index}`, // Different image source for each item
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={item.uri}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageWrapper: {
    flex: 1,
    margin: 5, // Add margin between images
  },
  image: {
    width: "100%",
    aspectRatio: 1, // Ensures images are squares
  },
});

export default ImageLoading;
