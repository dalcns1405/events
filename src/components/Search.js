// SearchBar.js

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from  "react-native-vector-icons/Ionicons"

const SearchBar = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" style={styles.linkIcon} />
      <TextInput
      
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection:"row"
  },
  input: {
    fontSize: 16,
  },
  linkIcon:{
    fontSize: 18,
    color: "blue",
    alignItems:"center",
    justifyContent:"center"
    
  }
});

export default SearchBar;
