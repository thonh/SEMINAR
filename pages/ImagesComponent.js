import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullScreenBg from "../components/Images/FullScreenBg";
import ImageLoading from "../components/Images/ImageLoading";
import ImageMapper from "../components/Images/ImageMapper";
import SlideImgGallery from "../components/Images/SlideimgGallery";
import GridImgGallery from "../components/Images/GridImgGallery";

const Stack = createNativeStackNavigator();

const name = ["Full Screen Background Image",
"Fast Speed Image Loading",
  "RN Image Mapper",
  "Slider Image Gallery",
  "Grid Image Gallery",
  ]

const CardsComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={DetailComponent} />
      <Stack.Screen
        name="Full Screen Background Image"
        component={FullScreenBg}
        options={{ title: "Full Screen Background Image" }}
      />
      <Stack.Screen
        name="Fast Speed Image Loading"
        component={ImageLoading}
        options={{ title: "Fast Speed Image Loading" }}
      />
      <Stack.Screen
        name="RN Image Mapper"
        component={ImageMapper}
        options={{ title: "RN Image Mapper" }}
      />
      <Stack.Screen
        name="Slider Image Gallery"
        component={SlideImgGallery}
        options={{ title: "Slider Image Gallery" }}
      />
      <Stack.Screen
        name="Grid Image Gallery"
        component={GridImgGallery}
        options={{ title: "Grid Image Gallery" }}
      />
    </Stack.Navigator>
  );
};

const DetailComponent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Full Screen Background Image")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Full Screen Background Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Fast Speed Image Loading")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Fast Speed Image Loading</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("RN Image Mapper")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>RN Image Mapper</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Slider Image Gallery")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Slider Image Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Grid Image Gallery")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Grid Image Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardsComponent;
