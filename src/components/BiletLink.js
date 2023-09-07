import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ionicons from  "react-native-vector-icons/Ionicons"
import { Linking, Alert } from 'react-native'; // Alert ekledik

const BiletLink = ({ event }) => {
  const openLink = (url) => {
    if (url) {
      Linking.openURL(url)
        .catch((error) => {
          console.error('Bağlantı açma hatası:', error);
        });
    } else {
      Alert.alert('Bilgi', 'Bilet satış bağlantısı bulunmuyor.');
    }
  }

  return (
    <View style={styles.linkContainer}>
      <TouchableOpacity onPress={() => openLink(event.BiletSatisLinki)}> 
        <Text style={styles.biletLinkText}>Bilet Satış Linki</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    biletLinkText: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop:50

      },
      linkContainer: {
        position: 'left',
        top: 2, // Alt kenardan 10 birim mesafe
        screenLeft: 10, // Sağ kenardan 10 birim mesafe
      },
})

export default BiletLink
