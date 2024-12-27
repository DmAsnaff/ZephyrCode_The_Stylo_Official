import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuthStore } from '../../store/useStore';  // Ensure correct path to your useStore

const ForumCard: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  // Access username directly from the store
  const username = useAuthStore((state) => state.userName);

  // Optionally, handle the case if username is still empty (e.g., before login)
  if (!username) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profilePicturePlaceholder}>
          {/* Profile picture placeholder */}
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          {/* Add an image if required */}
        </View>
      </View>

      {/* Like and Dislike Section */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setLikes(likes + 1)}
        >
          <Ionicons name="thumbs-up" size={24} color="green" />
          <Text style={styles.actionText}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setDislikes(dislikes + 1)}
        >
          <Ionicons name="thumbs-down" size={24} color="red" />
          <Text style={styles.actionText}>{dislikes}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicturePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ddd', // Placeholder background
  },
  imagePlaceholder: {
    flex: 1,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
});

export default ForumCard;
