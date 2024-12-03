import React, { useState} from 'react';
import { StyleSheet, ScrollView, Image, Text, View, Dimensions,TextInput, 
  TouchableOpacity, 
  FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
//import YoutubePlayer from 'react-native-youtube-iframe';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

interface Review {
  id: string;
  username: string;
  text: string;
  rating: number;
  date: string;
}
type ArticlePageRouteProp = RouteProp<RootStackParamList, 'ArticlePage'>;
type ArticlePageProps = {
  route: ArticlePageRouteProp;
};

const ArticlePage = ({ route }: ArticlePageProps) => {
  const { place } = route.params;
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      username: 'John Doe',
      text: 'Amazing place! Highly recommended.',
      rating: 5,
      date: '2024-01-15'
    },
    {
      id: '2',
      username: 'Jane Smith',
      text: 'Good experience, but could be improved.',
      rating: 4,
      date: '2024-02-20'
    }
  ]);

  // State for new review input
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);

  // Function to add a new review
  const addReview = () => {
    if (newReview.trim() === '') return;

    const reviewToAdd: Review = {
      id: String(reviews.length + 1),
      username: 'Current User', // In a real app, this would be the logged-in user
      text: newReview,
      rating: newRating,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([...reviews, reviewToAdd]);
    setNewReview('');
    setNewRating(5);
  };
   // Render individual review item
   const renderReviewItem = ({ item }: { item: Review }) => (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewUsername}>{item.username}</Text>
        <View style={styles.reviewRating}>
          {[...Array(item.rating)].map((_, i) => (
            <Feather key={i} name="star" size={16} color="#FFD700" />
          ))}
        </View>
      </View>
      <Text style={styles.reviewText}>{item.text}</Text>
      <Text style={styles.reviewDate}>{item.date}</Text>
    </View>
  );
   // Rating selector component
   const RatingSelector = () => (
    <View style={styles.ratingSelector}>
      {[1, 2, 3, 4, 5].map((rating) => (
        <TouchableOpacity 
          key={rating} 
          onPress={() => setNewRating(rating)}
        >
          <Feather 
            name="star" 
            size={24} 
            color={rating <= newRating ? "#FFD700" : "#E0E0E0"} 
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  return(
    <ScrollView style={styles.container}>
      <Image source={place.image} style={styles.heroImage} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{place.title}</Text>
          <View style={styles.rating}>
            <Feather name="star" size={24} color="#FFD700" />
            <Text style={styles.ratingText}>{place.rating}</Text>
          </View>
        </View>
        <Text style={styles.description}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
    
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Feather name="map-pin" size={24} color="#007A8C" />
            <Text style={styles.infoText}>bahtha darkom</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather name="clock" size={24} color="#007A8C" />
            <Text style={styles.infoText}>24 Hour</Text>
          </View>
        </View>
          {/* Reviews Section */}
          <View style={styles.reviewsSection}>
          <Text style={styles.reviewsSectionTitle}>Reviews</Text>
          
          {/* Review Input */}
          <View style={styles.reviewInputContainer}>
            <TextInput
              style={styles.reviewInput}
              placeholder="Write your review..."
              multiline
              value={newReview}
              onChangeText={setNewReview}
            />
            <RatingSelector />
            <TouchableOpacity 
              style={styles.submitReviewButton}
              onPress={addReview}
            >
              <Text style={styles.submitReviewButtonText}>Submit Review</Text>
            </TouchableOpacity>
          </View>

          {/* Reviews List */}
          <FlatList
            data={reviews}
            renderItem={renderReviewItem}
            keyExtractor={(item) => item.id}
            style={styles.reviewsList}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007A8C',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 20,
    color: '#007A8C',
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 16,
  },
  videoContainer: {
    marginVertical: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 8,
    fontSize: 18,
    color: '#007A8C',
  },
  reviewsSection: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  reviewsSectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007A8C',
    marginBottom: 15,
  },
  reviewInputContainer: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  reviewInput: {
    height: 100,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  ratingSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  submitReviewButton: {
    backgroundColor: '#007A8C',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitReviewButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  reviewsList: {
    marginTop: 15,
  },
  reviewItem: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007A8C',
  },
  reviewRating: {
    flexDirection: 'row',
  },
  reviewText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  reviewDate: {
    fontSize: 14,
    color: '#888',
    alignSelf: 'flex-end',
  },
});


export default ArticlePage;