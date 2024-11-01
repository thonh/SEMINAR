import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FloatingActionButton from "../components/FloatingActionButton";
import ActionButtonwithMultipleOption from "../components/ActionButtonwithMultipleOption";
import ExpandableCircularButton from "../components/ExpandableCircularButton";
import SwipeButton from "../components/SwipeButton";

const Stack = createNativeStackNavigator();

const ButtonComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={DetailComponent} />
      <Stack.Screen
        name="Floating Action Button"
        component={FloatingActionButton}
        options={{ title: "FloatingActionButton" }}
      />
      <Stack.Screen
        name="Action Button with Multiple Option"
        component={ActionButtonwithMultipleOption}
        options={{ title: "ActionButtonwithMultipleOption" }}
      />
      <Stack.Screen
        name="Expandable Circular Button"
        component={ExpandableCircularButton}
        options={{ title: "ExpandableCircularButton" }}
      />
      <Stack.Screen
        name="Swipe Button"
        component={SwipeButton}
        options={{ title: "SwipeButton" }}
      />
    </Stack.Navigator>
  );
};

const DetailComponent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Floating Action Button")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Floating Action Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Action Button with Multiple Option")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Action Button with Multiple Option</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Expandable Circular Button")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Expandable Circular Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Swipe Button")}
        style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>Swipe Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
