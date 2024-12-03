import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation'; // Adjust path as needed
import ArticlePage from './ArticlePage';

// Define navigation type
type DestinationsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Destinations'>;

// Destination data type
interface Destination {
  id: number;
  title: string;
  image: any;
  location: string;
  description: string;
  rating: string;
  attractions: string[];
  bestTimeToVisit: string;
}

const destinationsData: Destination[] = [
  {
    id: 1,
    title: 'Sahara Douz',
    image: require('../assets/sahara.png'),
    location: 'Kébili',
    description: 'Gateway to the Sahara Desert, known for its golden dunes and traditional Bedouin culture',
    rating: '6.9',
    attractions: ['Desert Treks', 'Camel Rides', 'Cultural Experiences'],
    bestTimeToVisit: 'October to April',
  },
  {
    id: 2,
    title: 'Amphitheatre of El Jem',
    image: require('../assets/eljem.png'),
    location: 'Mahdia',
    description: 'A UNESCO World Heritage site, one of the best-preserved Roman amphitheatres in the world',
    rating: '8.9',
    attractions: ['Historical Tours', 'Archaeological Site', 'Photography'],
    bestTimeToVisit: 'Spring and Autumn',
  },
  {
    id: 3,
    title: 'Medina of Yasmine Hammamet',
    image: require('../assets/yasmine.png'),
    location: 'Nabeul',
    description: 'A picturesque medina combining traditional architecture with stunning Mediterranean views',
    rating: '8.9',
    attractions: ['Historic Walking Tours', 'Local Crafts', 'Coastal Views'],
    bestTimeToVisit: 'May to September',
  }
];

const Destinations: React.FC = () => {
  const navigation = useNavigation<DestinationsScreenNavigationProp>();

  // Handle card press
  const handleViewPress = (place: Destination) => {
    navigation.navigate('ArticlePage', { place });
  };

  // Render each destination card
  const renderDestinationCard = (destination: Destination) => (
    <TouchableOpacity 
      key={destination.id} 
      style={styles.destinationCard}
      onPress={() => handleViewPress(destination)}
    >
      <Image source={destination.image} style={styles.destinationImage} />
      <View style={styles.destinationCardOverlay}>
        <View style={styles.destinationCardHeader}>
          <View>
            <Text style={styles.destinationName}>{destination.title}</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={16} color="white" />
              <Text style={styles.locationText}>{destination.location}</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}>{destination.rating}</Text>
          </View>
        </View>
        <Text style={styles.destinationDescription} numberOfLines={2}>
          {destination.description}
        </Text>
        <View style={styles.attractionsContainer}>
          {destination.attractions.map((attraction, index) => (
            <View key={index} style={styles.attractionPill}>
              <Text style={styles.attractionText}>{attraction}</Text>
            </View>
          ))}
        </View>
        <View style={styles.bestTimeContainer}>
          <Ionicons name="calendar" size={16} color="#336749" />
          <Text style={styles.bestTimeText}>Best Time: {destination.bestTimeToVisit}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Destinations</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchPlaceholder}>Search destinations...</Text>
      </View>

      <ScrollView 
        style={styles.destinationsContainer}
        showsVerticalScrollIndicator={false}
      >
        {destinationsData.map(renderDestinationCard)}
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#336749',
  },
  headerPlaceholder: {
    width: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 16,
    padding: 12,
    borderRadius: 8,
  },
  searchPlaceholder: {
    marginLeft: 8,
    color: '#666',
  },
  destinationsContainer: {
    paddingHorizontal: 16,
  },
  destinationCard: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  destinationImage: {
    width: '100%',
    height: 200,
  },
  destinationCardOverlay: {
    padding: 16,
  },
  destinationCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    marginLeft: 4,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    color: '#666',
  },
  destinationDescription: {
    color: '#666',
    marginBottom: 12,
  },
  attractionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  attractionPill: {
    backgroundColor: '#E6F2EC',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 4,
  },
  attractionText: {
    color: '#336749',
    fontSize: 12,
  },
  bestTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bestTimeText: {
    marginLeft: 8,
    color: '#336749',
    fontSize: 14,
  },
});
export default Destinations;