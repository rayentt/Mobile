// ConversationPage.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const ConversationPage = ({ route, navigation }: any) => {
  const { name, updateLastMessage, conversationId } = route.params;
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = { sender: 'You', text: newMessage };
      setMessages((prevMessages) => [...prevMessages, message]);
      updateLastMessage(conversationId, newMessage); // Update the last message in the conversation list
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/default-profile.png')} style={styles.avatar} />
        <Text style={styles.headerTitle}>Chat with {name}</Text>
      </View>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={message.sender === 'You' ? styles.yourMessage : styles.contactMessage}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={sendMessage}>
          <View style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#075e54',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  yourMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    maxWidth: '80%',
  },
  contactMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#075e54',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ConversationPage;
