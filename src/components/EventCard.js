
import { View, Text , TouchableOpacity,Image, StyleSheet} from 'react-native'
import React from 'react'
import EventInfo from '../screens/EventInfo';
import { SearchBar } from 'react-native-screens';


const EventCard = ({ data ,navigation}) => {
    return (
      
      <TouchableOpacity
        onPress={() => navigation.navigate("EventInfo", { eventsID: data.Id })}
        style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          {data.UcretsizMi ? (
            <View style={styles.freeBadge}>
              <Text style={styles.freeBadgeText}>Ücretsiz</Text>
            </View>
          ) : null}
          <Image source={{ uri: data.KucukAfis }} style={styles.image} />
        </View>
        <Text style={styles.eventName}>{data.Adi}</Text>
        
      </TouchableOpacity>
    );
};
  
const styles = StyleSheet.create({
    
      cardContainer: {
        width: 160,
        marginVertical: 14,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        position: "relative", 
      },
      imageContainer: {
        height: 150,
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: "relative", 
      },
      freeBadge: {
        backgroundColor: "green",
        borderRadius: 10,
        position: "absolute",
        top: 10,
        right: 10,
        padding: 5,
        zIndex: 1,
      },
      freeBadgeText: {
        color: "white",
        fontWeight: "bold",
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },
      eventName: {
        fontSize: 14,
        color: "black",
        fontWeight: "600",
        margin: 10,
      }
 
    
});

export default EventCard  