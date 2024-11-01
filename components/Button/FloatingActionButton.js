import React from "react";
import { View, StyleSheet } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/Ionicons";

const FloatingActionExample = () => {
  const actions = [
    {
      text: "Add",
      name: "add",
      color: "#3498db",
      icon: <Icon name="add-outline" size={24} color="#fff" />,
    },
    {
      text: "Search",
      name: "search",
      color: "#1abc9c",
      icon: <Icon name="search-outline" size={24} color="#fff" />,
    },
    {
      text: "Edit",
      name: "edit",
      color: "#e74c3c",
      icon: <Icon name="pencil-outline" size={24} color="#fff" />,
    },
  ];

  return (
    <View style={styles.container}>
      <FloatingAction
        actions={actions}
        color="#3498db"
        onPressItem={(name) => {
          alert(`Selected action: ${name}`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FloatingActionExample;
