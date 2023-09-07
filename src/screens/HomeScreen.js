import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { eventsData } from '../../data'
import EventCard from '../components/EventCard'

import Search from '../components/Search'


const HomeScreen = ({navigation}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);


    const [free, setFree] = useState([])
    const [cinema, setCinema] = useState([])
    const [concert, setConcert] = useState([])
    const [theatre, setTheatre] = useState([])
    const [exhibition, setExhibition] = useState([])


   

    useEffect(() => {
        // Implement the filtering logic when searchQuery changes
        const filtered = eventsData.filter((event) => {
          const query = searchQuery.toLowerCase();
          const eventName = event.Adi.toLowerCase();
          const organizer = event.Tur.toLowerCase();
        
    
          // Check if any of the fields match the search query
          return (
            eventName.includes(query) ||
            organizer.includes(query) 
           
          );
        });
    
        setFilteredEvents(filtered);
    }, [searchQuery]);


    useEffect(() => {
        const unsubscribe =navigation.addListener('focus',()=>{
            getDataFromDb()

        })
        return unsubscribe;
    },[navigation])



    const getDataFromDb = () =>{


        let freeList=[]
        let cinemaList=[]
        let concertList=[]
        let theatreList=[]
        let exhibitionList=[]

        for(let index=0 ; index < eventsData.length ; index++){
            if(eventsData[index].Tur == "SİNEMA"){
                cinemaList.push(eventsData[index])
            }else if(eventsData[index].Tur == "KONSER"){
                concertList.push(eventsData[index])
            }else if(eventsData[index].Tur == "TİYATRO"){
                theatreList.push(eventsData[index])
            }else if(eventsData[index].Tur == "SERGİ"){
                exhibitionList.push(eventsData[index])
            }else if(eventsData[index].UcretsizMi === true){
                freeList.push(eventsData[index])

            }

        }
        
       
        setCinema(cinemaList);
        setConcert(concertList);
        setTheatre(theatreList);
        setExhibition(exhibitionList);
        setFree(freeList);
    }

  return (
    <SafeAreaView>
      <Search value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Search events..." />

      <ScrollView>

        <Text>ALL</Text>

        <ScrollView horizontal>
          {filteredEvents.map((data) => (
          <EventCard data={data} key={data.Id} navigation={navigation} />
        ))}
      
        </ScrollView>
      
        <Text>SİNEMA </Text>
               
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
            {
                cinema.map((data)=>{
                    return <EventCard data={data} key={data.Id} navigation={navigation} />
                    
                })
            }

        </ScrollView>

        <Text>Konser</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
            {
                concert.map((data)=>{
                    return <EventCard data={data} key={data.Id} navigation={navigation}/>
                })
            }

        </ScrollView>


        
        <Text>Tiyatro</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
            {
                theatre.map((data)=>{
                    return <EventCard data={data} key={data.Id} navigation={navigation}/>
                })
            }

        </ScrollView>

        
        <Text>Sergi</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
            {
                exhibition.map((data)=>{
                    return <EventCard data={data} key={data.Id} navigation={navigation}/>
                })
            }

        </ScrollView>


        <Text>Ücretsiz</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
        {free.map((data) => {
          return <EventCard data={data} key={data.Id} navigation={navigation} />;
        })}
        </ScrollView>

        <Text >Ücretsiz Etkinlikler</Text>
       
    
      </ScrollView>
    </SafeAreaView>
  )
}



export default HomeScreen