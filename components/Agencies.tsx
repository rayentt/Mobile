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
import { RootStackParamList } from '../types/navigation'; // adjust path as needed

type AgenciesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Agencies'>;

// Agency data type
interface Agency {
  id: number;
  name: string;
  logo: any;
  description: string;
  specialties: string[];
  rating: number;
}

const agenciesData: Agency[] = [
  {
    id: 1,
    name: 'Sahara Expeditions',
    logo: require('../assets/sahara-expeditions-logo.png'),
    description: 'Specialists in desert tours and adventures',
    specialties: ['Desert Tours', 'Camel Treks', 'Camping'],
    rating: 4.8
  },
  {
    id: 2,
    name: 'Trivago',
    logo: require('../assets/trivago-logo.jpg'),
    description: 'Comprehensive travel solutions across Tunisia',
    specialties: ['Cultural Tours', 'Beach Holidays', 'Group Travel'],
    rating: 4.5
  },
  {
    id: 3,
    name: 'Travelocity',
    logo: require('../assets/travelocity-logo.png'),
    description: 'Exploring coastal and historic destinations',
    specialties: ['Coastal Tours', 'Historical Sites', 'Guided Walks'],
    rating: 4.7
  }
];
const Agencies  = ({ navigation }: any) => {
 // const navigation = useNavigation<AgenciesScreenNavigationProp>();

  const renderAgencyCard = (agency: Agency) => (
    <TouchableOpacity 
      key={agency.id} 
      style={styles.agencyCard}
      onPress={() => {/* Navigate to agency details screen */}}
    >
      <View style={styles.agencyCardHeader}>
        <Image source={agency.logo} style={styles.agencyLogo} />
        <View>
          <Text style={styles.agencyName}>{agency.name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}>{agency.rating}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.agencyDescription}>{agency.description}</Text>
      <View style={styles.specialtiesContainer}>
        {agency.specialties.map((specialty, index) => (
          <View key={index} style={styles.specialtyPill}>
            <Text style={styles.specialtyText}>{specialty}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Travel Agencies</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchPlaceholder}>Search agencies...</Text>
      </View>

      <ScrollView 
        style={styles.agenciesContainer}
        showsVerticalScrollIndicator={false}
      >
     {agenciesData.map(renderAgencyCard)}
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
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#336749',
  },
  headerPlaceholder: {
    width: 40, // Match back button width
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
  agenciesContainer: {
    paddingHorizontal: 16,
  },
  agencyCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  agencyCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  agencyLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  agencyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    color: '#666',
  },
  agencyDescription: {
    color: '#666',
    marginBottom: 12,
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specialtyPill: {
    backgroundColor: '#E6F2EC',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 4,
  },
  specialtyText: {
    color: '#336749',
    fontSize: 12,
  },
});
export default Agencies;