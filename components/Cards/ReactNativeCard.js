import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const ReactNativeCard = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg' }} />
        <Card.Content>
          <Title>Title of the Card</Title>
          <Paragraph>This is a description or content inside the card.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => console.log('Pressed')}>Action</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    elevation: 4,
    borderRadius: 8,
  },
});

export default ReactNativeCard;
