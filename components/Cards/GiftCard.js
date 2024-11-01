import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

const GiftCard = () => {
  const [giftCards, setGiftCards] = useState([
    { id: '1', code: 'GC123456', balance: '$50' },
    { id: '2', code: 'GC654321', balance: '$100' },
  ]);
  const [newCardCode, setNewCardCode] = useState('');

  const addGiftCard = () => {
    if (newCardCode.trim() === '') {
      Alert.alert('Error', 'Please enter a valid gift card code.');
      return;
    }

    const newCard = {
      id: Math.random().toString(),
      code: newCardCode,
      balance: '$0', // giả định là thẻ mới sẽ có số dư ban đầu là $0
    };

    setGiftCards((prevCards) => [...prevCards, newCard]);
    setNewCardCode('');
    Alert.alert('Success', 'Gift card added successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gift Cards</Text>

      <FlatList
        data={giftCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardCode}>Code: {item.code}</Text>
            <Text style={styles.cardBalance}>Balance: {item.balance}</Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter gift card code"
        value={newCardCode}
        onChangeText={(text) => setNewCardCode(text)}
      />

      <Button title="Add Gift Card" onPress={addGiftCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
  cardCode: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardBalance: {
    fontSize: 14,
    color: '#888',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default GiftCard;
