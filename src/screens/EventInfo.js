import { View, Text,FlatList ,Dimensions,ScrollView, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { eventsData } from '../../data';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import Entypo from  "react-native-vector-icons/Entypo"
import Ionicons from  "react-native-vector-icons/Ionicons"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Linking } from 'react-native';

//flastlistkısmını düzelt.Liste olmalı


const EventInfo = ({route ,navigation}) => {
  

  const{eventsID}=route.params;

  const [event, setEvent] = useState({})


  //bağlantı url si aç

  const openLink = (url) => {
    Linking.openURL(url)
      .catch((error) => {
        console.error('Bağlantı açma hatası:', error);
      });
  }
  

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

  //event horzontol scroll eventcard .slider?

  const renderEvent = ({item,index}) =>{
    return (
      <View >
        <Image style={styles.eventImage} source={{ uri:item.Resim }}/>
      </View>
      
    )
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
      <ScrollView>
        <View>
          <View>
            <TouchableOpacity>
              <Entypo name="chevron-left" style={styles.backButton} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
            data={event.Resim}
            renderItem={renderEvent}
            horizontal
            />
          </View>
         
        </View>
        <View style={{justifyContent:"space-between",flexDirection:"row"}}>
          <Text style={styles.eventName}>{event.Adi} </Text>
          <TouchableOpacity onPress={()=>openLink(event.EtkinlikUrl)}> 
            <Ionicons name="link-outline" style={styles.iconslink} />
           
          </TouchableOpacity>

        </View>
        <View>
            <Text style={styles.detail}>{event.KisaAciklama} </Text>
          </View>
        
        <View style={{flexDirection:"row",alignItems:"center",marginVertical:14}}>
         
          <View style={styles.locationcard}>
            <Entypo style={styles.iconslocation} name="location-pin"/>
          </View>
          <View>
            <Text>{event.EtkinlikMerkezi} </Text>

          </View>

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
      width:Dimensions.get("window").width,
      height: 240,
      alignItems: 'center',
      justifyContent: 'center',
    },
    eventName:{
      fontSize:24,
      fontWeight:"600",
      letterSpacing: 0.5,
      marginVertical:4,
      color:"black",
      maxWidth:"84%"
      
    },
    iconslink:{
      fontSize:24,
      color:"blue",
      borderRadius:100,
    
    },
    detail:{
      fontSize:12,
      color:"black",
      fontWeight:"400",
      letterSpacing:1,
      opacity:0.5,
      lineHeight:20,
      maxWidth:"auto",
      maxHeight:80,
      marginBottom:20,
      
    },
    iconslocation:{
      fontSize:16,
      color:"blue",
    },
    locationcard:{
      color:"blue",
      backgroundColor:"white",
      alignItems:"center",
      justifyContent:"center",
      padding:12,
      borderRadius:100,
      marginRight:10,
    }

    
    
});

export default EventInfo
