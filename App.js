import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ButtonComponent from "./pages/ButtonComponent";
import ImagesComponent from "./pages/ImagesComponent";
import CardsComponent from "./pages/CardsComponent";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{ headerShown: false }}>
        <Tab.Screen name="ButtonComponent" component={ButtonComponent} />
        <Tab.Screen name="ImagesComponent" component={ImagesComponent} />
        <Tab.Screen name="CardsComponent" component={CardsComponent} />
      </Tab.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
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
