import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ButtonComponent from "./pages/ButtonComponent";
import ImagesComponent from "./pages/ImagesComponent";
import CardsComponent from "./pages/CardsComponent";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{ headerShown: false }}>
        <Tab.Screen name="ButtonComponent" component={ButtonComponent} />
        <Tab.Screen name="ImagesComponent" component={ImagesComponent} />
        <Tab.Screen name="CardsComponent" component={CardsComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
