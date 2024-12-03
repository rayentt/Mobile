import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import FlightCard from './FlightCard';

interface Flight {
  departureTime: string;
  arrivalTime: string;
  flightDuration: string;
  flightClass: string;
  bookingId: string;
}

interface FlightsListProps {
  title: string;
  flights: Flight[];
}

const FlightsList: React.FC<FlightsListProps> = ({ title, flights }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={flights}
        keyExtractor={(item) => item.bookingId}
        renderItem={({ item }) => (
          <FlightCard
            departureTime={item.departureTime}
            arrivalTime={item.arrivalTime}
            flightDuration={item.flightDuration}
            flightClass={item.flightClass}
            bookingId={item.bookingId}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default FlightsList;