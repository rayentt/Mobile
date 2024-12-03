import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FlightCardProps {
  departureTime: string;
  arrivalTime: string;
  flightDuration: string;
  flightClass: string;
  bookingId: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
    
  departureTime,
  arrivalTime,
  flightDuration,
  flightClass,
  bookingId,
}) => {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor: '#007C71',paddingHorizontal: 8,paddingVertical: 4,borderRadius: 12, width:70,}}>
            <Text style={{color: '#FFFFFF',fontSize: 12,fontWeight: 'bold',}}>Upcoming</Text>
        </View>
        <View style={{backgroundColor: '#007C71',paddingHorizontal: 8,paddingVertical: 4,borderRadius: 12, width:70,position:'relative',left:190, bottom:25,}}>
            <Text style={{color: '#FFFFFF',fontSize: 12,fontWeight: 'bold',textAlign:'center'}}>View</Text>
        </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>{departureTime}</Text>
        
        <Text style={styles.duration}>{flightDuration}</Text>
        <Text style={styles.time}>{arrivalTime}</Text>
      </View>


      <View style={styles.detailsContainer}>
        <Text style={styles.flightClass}>{flightClass}</Text>
        <Text style={styles.bookingId}>Booking ID: {bookingId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    height:150,
    width:300,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 14,
    color: '#666',
  },
  detailsContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flightClass: {
    fontSize: 14,
    color: '#333',
  },
  bookingId: {
    fontSize: 14,
    color: '#666',
  },
});

export default FlightCard;