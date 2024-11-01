import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FloatingActionButton from "../components/Button/FloatingActionButton";
import ReactNativeCard from "../components/Cards/ReactNativeCard";
import Swipeable from "../components/Cards/Swipeable";
import GiftCard from "../components/Cards/GiftCard";

const Stack = createNativeStackNavigator();

const CardsComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={DetailComponent} />
      <Stack.Screen
        name="React Native Card View"
        component={ReactNativeCard}
        options={{ title: "React Native Card View" }}
      />
      <Stack.Screen
        name="Swipeable Card View"
        component={Swipeable}
        options={{ title: "Swipeable Card View" }}
      />
      <Stack.Screen
        name="Gift Card Screen"
        component={GiftCard}
        options={{ title: "Gift Card Screen" }}
      />
    </Stack.Navigator>
  );
};

const DetailComponent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("React Native Card View")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>React Native Card View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Swipeable Card View")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Swipeable Card View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Gift Card Screen")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Gift Card Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardsComponent;
