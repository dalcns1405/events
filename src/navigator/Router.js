import 'react-native-gesture-handler';
import React from 'react';
import SearchBar from '../components/SearchBar';
import EventDetailScreen from '../screens/EventDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EventDetailScreen">
        <Stack.Screen name="SearchBar" component={SearchBar} />
        <Stack.Screen name="EventDetails" component={EventDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
