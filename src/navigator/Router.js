import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MyCard from '../screens/MyCard';
import EventInfo from '../screens/EventInfo';
import EventCard from '../components/EventCard';



const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="HomeScreen" 
        screenOptions={{headerShown:false}}
        >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EventCard" component={EventCard} />
        <Stack.Screen name="Mycard" component={MyCard} />
        <Stack.Screen name="EventInfo" component={EventInfo} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
