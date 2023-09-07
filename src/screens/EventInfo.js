import { View, Text,FlatList ,Dimensions,ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { eventsData } from '../../data';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import Entypo from  "react-native-vector-icons/Entypo"
import Ionicons from  "react-native-vector-icons/Ionicons"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Linking } from 'react-native';
import MapCard from '../components/MapCard';
import LinkCard from '../components/LinkCard';
import BiletLink from '../components/BiletLink';


//flastlistkısmını düzelt.Liste olmalı


const EventInfo = ({route ,navigation}) => {

  

  const{eventsID}=route.params;

  const [event, setEvent] = useState({})
  

  useEffect(() => {
    const unsubscribe =navigation.addListener('focus',()=>{
        getDataFromDb()

    })
    return unsubscribe;
  }),[navigation]

  //get event data by eventsID
  //async await!


  const getDataFromDb =  async ()=>{
    for (let index = 0; index < eventsData.length; index++) {
      if(eventsData[index].Id == eventsID){
        await setEvent(eventsData[index])
        return;

      }
    }
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
      <ScrollView>
        <View>
          <View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Entypo name="chevron-left" style={styles.backButton} />
            </TouchableOpacity>
          </View>
          <View>
            <Image style={styles.eventImage} source={{ uri: event.Resim }}/>
            
          </View>
         
        </View>
        
        <View>
          <LinkCard event={event}/>
          
        </View>

        <View>
            <Text style={styles.detail}>{event.KisaAciklama} </Text>
        </View>
        
        <View style={{flexDirection:"row",alignItems:"center",marginVertical:14}}>
         
          <View style={styles.locationcard}>
            <Entypo style={styles.iconslocation} name="location-pin"/>
          </View>

          <View style={{justifyContent:"right"}}>
            <MapCard event={event} />
          </View>
          

        </View>
        <View>
          <BiletLink event={event} />

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    fontSize: 20,
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  eventImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width * 0.75,
    resizeMode: 'contain', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventName: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginVertical: 4,
    color: "black",
    maxWidth: "84%",
  },
  detail: {
    fontSize: 16, 
    color: 'black', 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom:25,
    marginTop:25,
    
    
  },
  iconslocation: {
    fontSize: 16,
    color: "blue",
  },
  locationcard: {
    color: "blue",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 100,
    marginRight: 10,
  }
});

export default EventInfo
