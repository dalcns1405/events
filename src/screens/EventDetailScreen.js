import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Router from '../navigator/Router';
import { useRoute } from '@react-navigation/native';


const EventDetailScreen = () => {
  const { item } = useRoute().params;



  return (
    <View style={styles.container}>
      <Text>Event Details</Text>
      <Text>Name: {item.Adi}</Text>
      <Text>Category: {item.Tur}</Text>
      {/* Diğer öğe detayları */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // ... Diğer stiller
  },
  // ... Diğer stiller
});

export default EventDetailScreen;
