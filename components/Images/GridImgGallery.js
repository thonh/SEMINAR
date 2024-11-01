import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import GridImageView from "react-native-grid-image-viewer";

const GridImgGallery = () => {
  const imagesArray = [
    "https://static.tuoitre.vn/tto/i/s626/2015/04/25/41B6gnc8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2oO8XIzq2J6XZF3_EcdSNvUBZfnSO9RYAg&s",
    "https://photo.znews.vn/w660/Uploaded/lerl/2018_07_13/Le_Minh_Tan_1_1.jpg",
    "https://cdn.pixabay.com/photo/2019/01/02/07/22/beauty-3908224_640.jpg",
    "https://cdn3.ivivu.com/2014/10/Du-lich-sai-gon-duoi-trai-nghiem-cua-phong-vien-bao-Theguardian-iVIVU.com-1.jpeg",
    "https://cdn.tuoitre.vn/thumb_w/480/2018/11/19/photo-1-1542595734035976576209.jpg",
  ];
  return (
    <View style={styles.background}>
      <Text style={styles.headline_text}>Grid View Images</Text>
      <Text style={styles.explore_text}>
        Click on an image to view in full screen mode
      </Text>

      {/* Basic Usage */}
      <GridImageView data={imagesArray} />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
  },
  headline_text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
});
export default GridImgGallery;
