// components/Cards/Swipeable.js
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import SwipeableCard from './SwipeableCard';

const data = [
  { id: '1', title: 'Card 1', description: 'Description for card 1' },
  { id: '2', title: 'Card 2', description: 'Description for card 2' },
  // Thêm nhiều card tùy ý
];

const Swipeable = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SwipeableCard title={item.title} description={item.description} />
        )}
      />
    </SafeAreaView>
  );
};

export default Swipeable;
