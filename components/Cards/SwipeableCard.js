// components/Cards/SwipeableCard.js
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

const SwipeableCard = ({ title, description }) => {
  const renderLeftActions = () => (
    <RectButton style={styles.leftAction} onPress={() => Alert.alert("Saved")}>
      <Text style={styles.actionText}>Save</Text>
    </RectButton>
  );

  const renderRightActions = () => (
    <RectButton style={styles.rightAction} onPress={() => Alert.alert("Deleted")}>
      <Text style={styles.actionText}>Delete</Text>
    </RectButton>
  );

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  leftAction: {
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    flex: 1,
  },
  rightAction: {
    backgroundColor: '#F44336',
    justifyContent: 'center',
    flex: 1,
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    padding: 20,
  },
});

export default SwipeableCard;
