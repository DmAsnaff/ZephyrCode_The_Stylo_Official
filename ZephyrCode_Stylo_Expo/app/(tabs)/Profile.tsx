import React, { useLayoutEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Title, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import Button from '@/components/buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Random from 'expo-random';
import { useAuthStore } from '../../store/useStore';

const Profile_screen: React.FC = () => {
    const navigation = useNavigation();
    const router = useRouter();
    const logout = useAuthStore((state) => state.logout);

    // const generateJWTSecret = async () => {
    //   try {
    //     const randomBytes = await Random.getRandomBytesAsync(32); // Generate 32 bytes of random data
    //     const randomBytesArray = Array.from(randomBytes); // Convert Uint8Array to number[]
    
    //     const jwtSecret = btoa(String.fromCharCode.apply(null, randomBytesArray)); // Convert random data to base64 string
    //     return jwtSecret;
    //   } catch (error) {
    //     console.error('Error generating JWT secret:', error);
    //     return null;
    //   }
    // };
    
    // // Example usage
    // generateJWTSecret().then((jwtSecret) => {
    //   if (jwtSecret) {
    //     console.log('Generated JWT secret:', jwtSecret);
    //   } else {
    //     console.log('Failed to generate JWT secret');
    //   }
    // });

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 22 }}
            onPress={() => router.push('../edit_profile')}
          >
            <Icon name="account-edit" size={28} color="#9CA3AF" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

    const handleLogout = async () => {
      try {
        // Clear any user data or tokens stored locally
        // await AsyncStorage.removeItem('token'); // Replace 'token' with your actual storage key
        logout(); 
        // Navigate to the login screen or any other screen
        router.replace('login'); // Replace 'Login' with your actual login screen name
      } catch (error) {
        console.error('Error logging out:', error);
        Alert.alert('Logout Failed', 'Unable to logout. Please try again later.');
      }
    };

    const showLogoutAlert = () => {
      Alert.alert(
        "Logout",
        "Are you sure you want to logout?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Logout canceled"),
            style: "cancel"
          },
          { text: "OK", onPress: handleLogout }
        ],
        { cancelable: false }
      );
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Image
            source={require('@/assets/images/profile.png')}
            style={styles.profilePic}
            accessibilityLabel="Profile Picture"
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              WELCOME
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="account" color="#777777" size={20} />
          <Text style={styles.label}>Name:</Text>
          
        </View>
        <View style={styles.row}>
          <Icon name="account" color="#777777" size={20} />
          <Text style={styles.label}>User Name:</Text>
          
        </View>

        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={styles.label}>Email:</Text>
          
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={styles.label}>Address:</Text>
          
        </View>
        <View style={styles.row}>
          <Icon name="calendar" color="#777777" size={20} />
          <Text style={styles.label}>Date of Birth:</Text>
        </View>
        <View style={{alignItems:'center', paddingTop:70,}}>
        <Button style={{backgroundColor:'#16A085', borderColor:'#16A085',}}title="Logout" onPress={showLogoutAlert} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  value: {
    color: '#777777',
    marginLeft: 5,
  },
});




