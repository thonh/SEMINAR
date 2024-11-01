import { View, Text } from "react-native";
import React from "react";
import Gallery from "react-native-awesome-gallery";

const SlideImgGallery = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s",
    "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
  ];
  return (
    <Gallery
      data={images}
      onIndexChange={(newIndex) => {
        console.log(newIndex);
      }}
    />
  );
};

export default SlideImgGallery;
