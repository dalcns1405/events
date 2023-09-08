import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { eventsData } from '../../data'
import EventCard from '../components/EventCard'
import Search from '../components/Search'
import { StyleSheet } from 'react-native'


const HomeScreen = ({ navigation }) => {
  //filtreleme
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  //kategoriler
  const [free, setFree] = useState([]);
  const [cinema, setCinema] = useState([]);
  const [concert, setConcert] = useState([]);
  const [theatre, setTheatre] = useState([]);
  const [exhibition, setExhibition] = useState([]);

  useEffect(() => {
    const filtered = eventsData.filter((event) => {
      const query = searchQuery.toLowerCase();

      const eventName = event.Adi.toLowerCase();
      const eventTur = event.Tur.toLowerCase();

      return (
        eventName.includes(query) ||
        eventTur.includes(query)
      );
    });

    setFilteredEvents(filtered);
  }, [searchQuery]);

 

  const getDataFromDb = () => {
    let freeList = [];
    let cinemaList = [];
    let concertList = [];
    let theatreList = [];
    let exhibitionList = [];

    for (let index = 0; index < eventsData.length; index++) {
      if (eventsData[index].Tur == "SİNEMA") {
        cinemaList.push(eventsData[index]);
      } else if (eventsData[index].Tur == "KONSER") {
        concertList.push(eventsData[index]);
      } else if (eventsData[index].Tur == "TİYATRO") {
        theatreList.push(eventsData[index]);
      } else if (eventsData[index].Tur == "SERGİ") {
        exhibitionList.push(eventsData[index]);
      } else if (eventsData[index].UcretsizMi === true) {
        freeList.push(eventsData[index]);
      }
    }

    setCinema(cinemaList);
    setConcert(concertList);
    setTheatre(theatreList);
    setExhibition(exhibitionList);
    setFree(freeList);
  };
  
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDb();
    });
    return unsubscribe;
  }, [navigation]);

  


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' />
      <Search value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Search events..." />
      <ScrollView>
        <Text style={styles.categoryText}>TÜMÜ </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filteredEvents.map((data) => (
            <EventCard data={data} key={data.Id} navigation={navigation} />
          ))}
        </ScrollView>

        <Text style={styles.categoryText}>SİNEMA</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
          {cinema.map((data) => {
            return <EventCard data={data} key={data.Id} navigation={navigation} />;
          })}
        </ScrollView>

        <Text style={styles.categoryText}>KONSER</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
          {concert.map((data) => {
            return <EventCard data={data} key={data.Id} navigation={navigation} />;
          })}
        </ScrollView>

        <Text style={styles.categoryText}>TİYATRO</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
          {theatre.map((data) => {
            return <EventCard data={data} key={data.Id} navigation={navigation} />;
          })}
        </ScrollView>

        <Text style={styles.categoryText}>SERGİ</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled={true}>
          {exhibition.map((data) => {
            return <EventCard data={data} key={data.Id} navigation={navigation} />;
          })}
        </ScrollView>

       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9c5b',
    marginVertical: 10,
    marginLeft: 16,
  },
});

export default HomeScreen;
