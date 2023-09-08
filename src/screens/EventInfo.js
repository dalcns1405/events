import { View, Text,FlatList ,Dimensions,ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { eventsData } from '../../data';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import Entypo from  "react-native-vector-icons/Entypo"
import { SafeAreaView } from 'react-native-safe-area-context';
import MapCard from '../components/MapCard';
import LinkCard from '../components/LinkCard';
import BiletLink from '../components/BiletLink';

const EventInfo = ({ route, navigation }) => {
  const { eventsID } = route.params;
  const [event, setEvent] = useState({});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDb();
    });
    return unsubscribe;
  }, [navigation]);

  const getDataFromDb = async () => {
    for (let index = 0; index < eventsData.length; index++) {
      if (eventsData[index].Id == eventsID) {
        await setEvent(eventsData[index]);
        return;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
      <ScrollView>
        <View>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="chevron-left" style={styles.backButton} />
            </TouchableOpacity>
          </View>
          <View>
            <Image style={styles.eventImage} source={{ uri: event.Resim }} />
          </View>
        </View>

        <View>
          <LinkCard event={event} />
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.label}>Etkinlik Tarihi :</Text>
          <Text style={styles.dateText}>
            {event.EtkinlikBaslamaTarihi} / {event.EtkinlikBitisTarihi}
          </Text>
        </View>

        <View>
          <Text style={styles.detail}>{event.KisaAciklama}</Text>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationCard}>
            <Entypo style={styles.iconsLocation} name="location-pin" />
          </View>

          <View style={styles.mapContainer}>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.75,
    resizeMode: 'contain',
  },
  detail: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 25,
  },
  iconsLocation: {
    fontSize: 16,
    color: 'blue',
  },
  locationCard: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 100,
    marginRight: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginVertical: 10,
    padding: 10,
  },
  label: {
    fontWeight: '600',
    color: 'blue',
    marginRight: 5,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  mapContainer: {
    flex: 1,
  },
});

export default EventInfo;
