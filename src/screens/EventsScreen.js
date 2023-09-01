import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios'; // Axios kütüphanesi import edildi

export default function Events() {
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler')
      .then(response => {
        // API'den gelen verileri state'e ekleme
        setEventsList(response.data);
        setLoading(false); // Yükleme tamamlandı
      })
      .catch(error => {
        console.error('API isteği sırasında hata oluştu:', error);
        setLoading(false); // Hata durumunda da yükleme tamamlandı
      });
  }, []); // Boş dizi, bileşen yüklendiğinde bir kez çalışır

  const renderEventCard = ({ item }) => {
    return (
      <View>
        <Text>{item.Tur}</Text>
        <Text>{item.Adi}</Text>
        <Text>{item.KisaAciklama}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={eventsList}
        renderItem={renderEventCard}
        keyExtractor={(item) => item.Id.toString()}
      />
    </SafeAreaView>
  );
}
