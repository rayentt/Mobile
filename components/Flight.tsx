import React from 'react';
import { View, StyleSheet } from 'react-native';
import FlightsList from './FlightsList';

const Flight: React.FC = () => {
  const upcomingFlights = [
    {
      departureTime: '05:30',
      arrivalTime: '06:30',
      flightDuration: '3h 45m',
      flightClass: 'Comfort • Economy • Direct',
      bookingId: 'E12RD9',
    },
    {
        departureTime: '15:30',
        arrivalTime: '17:30',
        flightDuration: '2h 00m',
        flightClass: 'Comfort • Economy • Direct',
        bookingId: 'E12RD9',
      },
    // Add more upcoming flights here
  ];

  const lessExpensiveFlights = [
    {
      departureTime: '12:30',
      arrivalTime: '16:30',
      flightDuration: '2h 00m',
      flightClass: 'Medium • Ultra Economy • Escale in :Morocco',
      bookingId: 'E12RD9',
    },
    // Add more less expensive flights here
  ];

  return (
    
    <View style={styles.container}>
      <FlightsList title="Upcoming flights" flights={upcomingFlights} />
      <FlightsList title="Less expensive flights" flights={lessExpensiveFlights} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
});

export default Flight;