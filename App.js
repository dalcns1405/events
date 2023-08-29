import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from './src/components/SearchBar'
import EventsScreen from './src/screens/EventsScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView>
       <SearchBar/>
       <EventsScreen/>
    </SafeAreaView>
  
  )
}

export default App