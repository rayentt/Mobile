import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Import components
import DestinationCard from './DestinationCard';
import MightlikeCard from './MightlikeCard';
import PromotionCard from './PromotionCard';

// Import utility functions
import { getIconName, getBottomIconName } from '../constants/icons';
import { RootStackParamList } from '../types/navigation';
import Agencies from './Agencies';
import Profile from './Profile';
import Destinations from './Destinations'
import Flight from './Flight';
import ConversationListPage from './ConversationListPage';
import Favourites from './Favourites';


type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function TopNavigationHeader({ 
  navigation, 
  topNavIndex, 
  setTopNavIndex, 
  topNavTabs 
}: {
  navigation: HomeScreenNavigationProp,
  topNavIndex: number,
  setTopNavIndex: (index: number) => void,
  topNavTabs: Array<{name: string, icon: string}>
}) {
  return (
    <>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, Rana</Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.points}>1,200 points</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profilePic}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.navIcons}>
        {topNavTabs.map((tab, index) => (
          <TouchableOpacity 
            key={tab.name} 
            style={styles.navItem}
            onPress={() => setTopNavIndex(index)}
          >
            <Ionicons
              name={tab.icon as any}
              size={24} 
              color={topNavIndex === index ? '#336749' : '#666'} 
            />
            <Text style={[
              styles.navText, 
              topNavIndex === index && { color: '#336749' }
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
// Placeholder components for different tabs
function FlightScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          placeholder="Where to go?"
          style={styles.searchInput}
          placeholderTextColor="#666"
        />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Discover Wonders</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Destinations')}>
            <Text style={styles.seeAll}>See all</Text>

          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <DestinationCard
            image={require('../assets/sahara.png')}
            title="Sahara Douz"
            location="Kébili"
            rating="6.9"
          />
          <DestinationCard
            image={require('../assets/chatt.png')}
            title="Chatt Mariem"
            location="Sousse"
            rating="8.8"
          />
          <DestinationCard
            image={require('../assets/tabarka.png')}
            title="Tabarka"
            location="Jendouba"
            rating="4.8"
          />
        </ScrollView>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>places you might like</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Destinations')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <MightlikeCard
          image={require('../assets/cap.png')}
          title="Cap Angela"
          location="Bizerte"
          rating="7.9"
        />
            <MightlikeCard
          image={require('../assets/eljem.png')}
          title="Amphitheatre of El Jem"
          location="Mahdia"
          rating="8.9"
        />
          <MightlikeCard
          image={require('../assets/yasmine.png')}
          title="Medina of Yasmine Hammamet"
          location="Nabeul"
          rating="8.9"
        />
        </ScrollView>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Our Latest Promotions</Text>
            <Text style={styles.sectionSubtitle}>Best deals from agencies & guides</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.promotionsContainer}
        >
          <PromotionCard
            image={require('../assets/sahara-tour.png')}
            title="3-Day Best Sahara Desert Adventure"
            agency="Sahara Expeditions"
            discount="30"
            originalPrice="599"
            discountedPrice="419"
            validUntil="Dec 31, 2024"
            type="agency"
          />
          <PromotionCard
            image={require('../assets/medina-tour.png')}
            title="Medina Walking Tour with Local Expert"
            agency="Ahmed Hassan"
            discount="25"
            originalPrice="80"
            discountedPrice="60"
            validUntil="Dec 15, 2024"
            type="guide"
          />
          <PromotionCard
            image={require('../assets/beach-tour.png')}
            title="Coastal Paradise Weekend Package"
            agency="Tunisia Travel Plus"
            discount="20"
            originalPrice="299"
            discountedPrice="239"
            validUntil="Jan 15, 2025"
            type="agency"
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

function HotelsScreen() {
  return (
  <View style={styles.tabContainer}>
    <Text>Hotels Screen</Text>
  </View>
  );
}

function GuideScreen() {
  return (
  <View style={styles.tabContainer}>
    <Text>Guide Screen</Text>
  </View>
  );
}

function DestinationScreen() {
  return (
  <View style={styles.tabContainer}>
    <Text>Destination Screen</Text>
  </View>
  );
}

function ChatsScreen() {
  return (
  <View style={styles.tabContainer}>
    <Text>Chats Screen</Text>
  </View>
  );
}

function FavouriteScreen() {
  return (
  <View style={styles.tabContainer}>
    <Text>Favourite Screen</Text>
  </View>
  );
}

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  const [topNavIndex, setTopNavIndex] = useState(0);
  const [bottomNavIndex, setBottomNavIndex] = useState(0);

  const topNavTabs = [
    { name: 'Discover', component: FlightScreen, icon: 'compass' },
    { name: 'Flights', component: Flight, icon: 'airplane' },
    { name: 'Destinations', component: Destinations , icon: 'globe' },
    { name: 'Agency', component: Agencies, icon: 'business' }
  ];

  const bottomNavTabs = [
    { name: 'Home', component: HomeMainContent },
    { name: 'Chats', component: ConversationListPage },
    { name: 'favourites', component: Favourites },
    { name: 'Account', component: Profile }
  ];

  const CurrentTopNavComponent = topNavTabs[topNavIndex].component;
  
  const CurrentBottomNavComponent = bottomNavTabs[bottomNavIndex].component;

  function HomeMainContent() {
    return (
      <>
        <TopNavigationHeader 
        navigation={navigation}
        topNavIndex={topNavIndex}
        setTopNavIndex={setTopNavIndex}
        topNavTabs={topNavTabs}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CurrentTopNavComponent />
        </ScrollView>
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CurrentBottomNavComponent />
      
      <View style={styles.bottomNav}>
        {bottomNavTabs.map((tab, index) => (
          <TouchableOpacity 
            key={tab.name} 
            style={styles.bottomNavItem} 
            onPress={() => {
              setBottomNavIndex(index);
            }}
          >
            <Ionicons 
              name={getBottomIconName(tab.name)} 
              size={24} 
              color={bottomNavIndex === index ? '#336749' : '#666'} 
            />
            <Text style={[
              styles.bottomNavText, 
              bottomNavIndex === index && styles.activeNavText
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  points: {
    marginLeft: 4,
    color: '#666',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 16,
    padding: 12,
    borderRadius: 8,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#336749',
  },
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
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  promotionsContainer: {
    paddingVertical: 8,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});
