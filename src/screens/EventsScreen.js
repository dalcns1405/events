import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

export default function Events() {
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler')
      
      .then(response => {
        setEventsList(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        Alert.alert("İşlem sırasında bir hata meydana geldi");
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView>
      {loading == true ? 
        <ActivityIndicator /> :
      
        <FlatList
          data={eventsList}
          renderItem={({ item }) => <Text>{item.Adi}</Text>}
          keyExtractor={item => item.Id}
        />
      }
    </SafeAreaView>
  );
}
