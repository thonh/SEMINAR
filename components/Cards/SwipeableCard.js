import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

const SwipeableCard = ({ title, description, image }) => {
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
        {/* Kiểm tra URL và hiển thị hình ảnh */}
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.errorText}>Image not available</Text>
        )}
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
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
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
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default SwipeableCard;
