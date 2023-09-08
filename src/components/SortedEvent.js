import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { eventsData } from '../../data';
import Entypo from 'react-native-vector-icons/Entypo';
import { Image } from 'react-native';
import EventCard from './EventCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const SortedEvent = ({ navigation }) => {
    const [sortedEvents, setSortedEvents] = useState([]);
    const [sortByDate, setSortByDate] = useState(true);

    useEffect(() => {
        const sorted = eventsData.slice(); // Veriyi değiştirmemek için bir kopya alın
        if (sortByDate) {
            sorted.sort((a, b) => {
                const dateA = new Date(a.EtkinlikBaslamaTarihi);
                const dateB = new Date(b.EtkinlikBaslamaTarihi);
                return dateA - dateB;
            });
        } else {
            // Tarihe göre tersten sırala
            sorted.sort((a, b) => {
                const dateA = new Date(a.EtkinlikBaslamaTarihi);
                const dateB = new Date(b.EtkinlikBaslamaTarihi);
                return dateB - dateA;
            });
        }
        setSortedEvents(sorted);
    }, [sortByDate]);

    const toggleSortByDate = () => {
        setSortByDate((prevSortByDate) => !prevSortByDate);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={toggleSortByDate}>
                <Text style={styles.sortButton}>
                    {sortByDate ? 'Eski Etkinlikler' : 'Yeni Etkinlikler'}
                </Text>
            </TouchableOpacity>
            <FlatList
                data={sortedEvents}
                keyExtractor={(item) => item.Id.toString()}
                renderItem={({ item }) => (
                   <EventCard data={item} navigation={navigation}/>
                   
                )}
            />
            <View style={styles.goBackButton}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" style={styles.goBackIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 16,
            paddingTop: 16,
        },
        eventItem: {
            marginBottom: 16,
            padding: 16,
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
        },
        eventName: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        goBackButton: {
            position: 'absolute',
            top: 16,
            left: 16,
        },
        goBackIcon: {
            fontSize: 32,
            color: 'blue',
        },
        sortButton: {
            fontSize: 18, 
            fontWeight: 'bold',
            marginBottom: 16,
            color: 'blue',
            textDecorationLine: 'underline',
            textAlign: 'center', 
        },

    
    
});

export default SortedEvent;
