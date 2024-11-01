// components/Cards/Swipeable.js
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import SwipeableCard from './SwipeableCard';

const data = [
  { id: '1', title: 'Halloween Event ', description: 'Hallowen card 1', image: 'https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2021/04/anh-nen-halloween-2.jpg' },
  { id: '2', title: 'Halloween Running', description: 'Hallowen card 2', image: 'https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-beautiful-halloween-trendy-background-images-image_15725314.jpg' },
  // Thêm nhiều card tùy ý
];

const Swipeable = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SwipeableCard title={item.title} description={item.description} image={item.image} />
        )}
      />
    </SafeAreaView>
  );
};

export default Swipeable;
