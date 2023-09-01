import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { eventsData } from '../../data';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState(eventsData);

  const handleSearch = () => {
    const filteredEvents = eventsData.filter(item => {
      if (searchText && !item.Adi.toLowerCase().includes(searchText.toLowerCase())) {
        return false;
      }
      if (selectedCategory !== 'All' && item.Tur !== selectedCategory) {
        return false;
      }
      return true;
    });
    setFilteredData(filteredEvents);
  };

  // renderItem fonksiyonunu güncelleyin
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleItemPress(item)} // Öğeye tıklandığında işlenecek fonksiyon
    >
      <Text>{item.Adi}</Text>
      <Text>{item.Tur}</Text>
      {/* Diğer öğe bilgileri */}
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    // Tıklanan öğenin detay ekranını açın
    navigation.navigate('EventDetails', { item });
  };

 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder='Search here..'
        value={searchText}
        onChangeText={setSearchText}
        onEndEditing={handleSearch}
      />

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.Id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: "auto",
    backgroundColor: 'white',
    borderRadius: 8,
    // ... Diğer stiller
  },

  searchInput: {
    width: 'auto',
    height: 'auto',
    paddingLeft: 8,
    fontSize: 16,
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

export default SearchBar;



import { View, Text } from 'react-native'
import React from 'react'

const EventsDetailScreen = ({ route }) => {

  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text>Event Details</Text>
      <Text>Name: {item.Adi}</Text>
      <Text>Category: {item.Tur}</Text>
      {/* Diğer öğe detayları */}
    </View>
  );

}

export default EventsDetailScreen




import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from '../screens/EventsScreen';
import SearchBar from '../components/SearchBar';


const StackNavigator = () => {

    

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SearchBar">
            <Stack.Screen name="Events" component={SearchBar} />
            <Stack.Screen name="EventsDetailScreen" component={EventDetailsScreen} />

        </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default StackNavigator
