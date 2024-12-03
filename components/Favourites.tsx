import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { getIconName, getBottomIconName } from '../constants/icons';
import { Ionicons } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation'; // adjust path as needed
type favouritesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Favourites'>;

const Favourites = () => {
    const navigation = useNavigation<favouritesScreenNavigationProp>();
  const [favouritePlaces, setFavouritePlaces] = useState([
    {
      id: '1',
      name: 'Tabarka ',
      state: 'Jendouba',
      image: require('../assets/tabarka.png'),
      rating: '4.5',
    },
    {
      id: '2',
      name: 'eljem',
      state: 'Mahdia',
      image: require('../assets/eljem.png'),
      rating: '5.0',
    },
    {
      id: '3',
      name: 'Douz ',
      state: 'Kebili',
      image: require('../assets/sahara-tour.png'),
      rating: '4.7',
    },
  ]);

  const handlePlaceAction = (id: string, action: string) => {
    if (action === 'remove') {
      Alert.alert(
        'Remove from Favourites',
        'Are you sure you want to remove this place from your favourites?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              setFavouritePlaces((prev) =>
                prev.filter((place) => place.id !== id)
              );
            },
          },
        ]
      );
    } else if (action === 'visit') {
      Alert.alert('Visit Place', `You will now be directed to ${id}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourites</Text>
      </View>

      <FlatList
        data={favouritePlaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.placeContainer}>
            <Image source={item.image} style={styles.placeImage} />
            <View style={styles.placeInfo}>
              <Text style={styles.placeName}>{item.name}</Text>
              <Text style={styles.placeState}>{item.state}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{item.rating}</Text>
                <Text style={styles.ratingStar}>★</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.threeDots}
              onPress={() => {
                Alert.alert('Options', '', [
                  {
                    text: 'Remove from Favourites',
                    onPress: () => handlePlaceAction(item.id, 'remove'),
                  },
                  {
                    text: 'Visit',
                    onPress: () => handlePlaceAction(item.id, 'visit'),
                  },
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                ]);
              }}
            >
              <Text style={styles.threeDotsText}>⋮</Text>
            </TouchableOpacity>
          </View>
        )}
      />
       
      
    </View>
  );
};

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#EEE',
      },
      bottomNavItem: {
        alignItems: 'center',
      },
      bottomNavText: {
        marginTop: 4,
        fontSize: 12,
        color: '#666',
      },
      activeNavText: {
        color: '#336749',
      },
    navIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
      },
      navItem: {
        alignItems: 'center',
      },
      navText: {
        marginTop: 4,
        fontSize: 12,
        color: '#666',
      },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#336749',
    padding: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  placeContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10, // Reduced padding for minimal space
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 110, // Slightly increased height
  },
  placeImage: {
    width: 90, // Square size
    height: 90,
    borderRadius: 10, // Optional rounded corners
    marginRight: 10,
  },
  placeInfo: {
    flex: 1,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeState: {
    fontSize: 14,
    color: '#888',
    opacity: 0.8, // Reduced opacity for the state text
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingStar: {
    fontSize: 16,
    color: '#FFD700',
    marginLeft: 4,
  },
  threeDots: {
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  threeDotsText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Favourites;
