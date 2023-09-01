import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const EventList = ({ data, navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('EventDetails', { item })}
    >
      <Text>{item.Adi}</Text>
      <Text>{item.Tur}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    // ... Diğer stiller
  },

  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    // ... Diğer stiller
  },
  // ... Diğer stiller
});

export default EventList;
