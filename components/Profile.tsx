import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ProfileData {
  name: string;
  email: string;
  dateOfBirth: string;
  country: string;
  region: string;
  points: number;
  level: string;
}

const Profile = ({ navigation }: any) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Rana Chouchane',
    email: 'rana.chouchane@supcom.tn',
    dateOfBirth: '25/04/2002',
    country: 'Tunisia',
    region: 'Gafsa',
    points: 1200,
    level: 'Gold Traveler'
  });

  const [isEditing, setIsEditing] = useState(false);

  const getLevelColor = (points: number) => {
    if (points >= 2000) return '#FFD700'; // Gold
    if (points >= 1000) return '#C0C0C0'; // Silver
    return '#CD7F32'; // Bronze
  };

  const renderPoints = () => (
    <View style={styles.pointsContainer}>
      <Text style={styles.pointsTitle}>Reward Points</Text>
      <Text style={[styles.pointsValue, { color: getLevelColor(profileData.points) }]}>
        {profileData.points}
      </Text>
      <Text style={styles.levelText}>{profileData.level}</Text>
      <Text style={styles.pointsInfo}>
        Earn more points by booking flights, guides, and exploring Tunisia!
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('../assets/default-profile.png')} // Make sure to add this image
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Text style={styles.editImageText}>Edit Photo</Text>
          </TouchableOpacity>
        </View>

        {renderPoints()}

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={profileData.name}
              editable={isEditing}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={profileData.email}
              editable={isEditing}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              value={profileData.dateOfBirth}
              editable={isEditing}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Country</Text>
            <TextInput
              style={styles.input}
              value={profileData.country}
              editable={isEditing}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Region</Text>
            <TextInput
              style={styles.input}
              value={profileData.region}
              editable={isEditing}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={styles.buttonText}>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  editImageButton: {
    padding: 8,
  },
  editImageText: {
    color: '#2E8B57',
    fontSize: 16,
  },
  pointsContainer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pointsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  pointsValue: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  levelText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  pointsInfo: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  formContainer: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2E8B57',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Profile;