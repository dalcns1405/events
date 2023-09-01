import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import EventList from './EventList';


const SearchBar= ({ eventsData ,navigation})  => {
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

  const handleItemPress = (item) => {
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
      

      <EventList data={filteredData} onItemPress={handleItemPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 50,
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
  // ... Diğer stiller
});

export default SearchBar;
