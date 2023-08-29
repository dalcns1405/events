import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder='Search here..'/>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        width:"auto",
        height:50,
        backgroundColor:"white",
        borderRadius:8,
        
    },

    searchInput:{
        width:"auto",
        height:"auto",
        paddingLeft:8,
        fontSize:16,
    }


})

export default SearchBar