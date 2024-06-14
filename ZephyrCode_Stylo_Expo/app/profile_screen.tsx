import React, { useLayoutEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Title, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Profile_screen: React.FC = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate('edit_profile')}
          >
            <Icon name="account-edit" size={25} color="#FFFFFF" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

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
      </View>
    </SafeAreaView>
  );
};

export default Profile_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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



