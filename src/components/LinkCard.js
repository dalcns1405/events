import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ionicons from  "react-native-vector-icons/Ionicons"
import { Linking } from 'react-native';



const LinkCard = ({event}) => {
    const openLink = (url) => {
      Linking.openURL(url)
        .catch((error) => {
          console.error('Bağlantı açma hatası:', error);
          });
    }

    return(
    <View style={styles.container}>
      <Text style={styles.eventName}>{event.Adi} </Text>
        <TouchableOpacity onPress={()=>openLink(event.EtkinlikUrl)}> 
          <Ionicons name="link-outline" style={styles.linkIcon} />
         
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     paddingHorizontal: 16,
     paddingVertical: 10,
     backgroundColor: "#F5F5F5",
     borderRadius: 8,
     marginBottom: 16,
    },
    eventName: {
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
      flex: 1,
      marginRight: 8,
    },
    linkIcon: {
      fontSize: 24,
      color: "blue",
    },

})

export default LinkCard