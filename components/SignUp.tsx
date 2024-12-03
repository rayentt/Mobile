import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View, Alert,Image,ImageBackground} from 'react-native';

const SignUp  = ({ navigation }: any) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nationality: '',        // New field
    dateOfBirth: '',        // New field
    gender: '', 
  });

  const handleSignUp = () => {
    // Vérification si les mots de passe correspondent
    if (form.password !== form.confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
    } else {
      Alert.alert('Succès', 'Compte créé avec succès');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/sidibo.jpg')} // Replace with your background image
        style={styles.imageBackground}
      >
      <View style={styles.form}>
        <Text style={styles.title}>Create an account</Text>

        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={form.email}
          onChangeText={email => setForm({ ...form, email })}
        />

    <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={form.password}
          onChangeText={password => setForm({ ...form, password })}
        />

    <TextInput
          placeholder="Confirme Password"
          style={styles.input}
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={confirmPassword => setForm({ ...form, confirmPassword })}
        />
    <TextInput
          placeholder="Nationality"
          style={styles.input}
          value={form.nationality}
          onChangeText={nationality => setForm({ ...form, nationality })}
        />
    <TextInput
          placeholder="Date of birth
           (YYYY-MM-DD)"
          style={styles.input}
          value={form.dateOfBirth}
          onChangeText={dateOfBirth => setForm({ ...form, dateOfBirth })}
        />
  


          <TouchableOpacity onPress={handleSignUp} style={styles.btn}>
          <Text style={styles.btnText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
      <Image
          source={require('../assets/logotg.png')} // Make sure the path is correct
          style={styles.logo}
        />
    </ImageBackground>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  imageBackground: {
    flex: 1, // Ensure the image covers the whole screen
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  container: {
    flex: 1,
  },

  logo: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: 20, // Adjust the top position as needed
    left:110,
  },
  form: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 8,
    elevation: 5,
    width:'90%',
    position:'relative',
    right:1,
    top:25,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color:'#376A4C',
  },

  input: {
    height: 44,
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  btn: {
    backgroundColor: '#007A8C',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
export default SignUp;