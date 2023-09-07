import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const MapCard = ({ event }) => {
  const openLocationInMaps = () => {
    if (event && event.EtkinlikMerkezi) {
      const location = event.EtkinlikMerkezi;

      // Google Haritalar URL'sini oluşturun
      const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;

      Linking.openURL(mapUrl)
        .catch((error) => {
          console.error('Konuma yönlendirme hatası:', error);
        });
    } else {
      console.warn('Etkinlik merkezi bilgisi eksik veya geçersiz.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openLocationInMaps}>
        <Text style={styles.text}>{event.EtkinlikMerkezi}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MapCard;





