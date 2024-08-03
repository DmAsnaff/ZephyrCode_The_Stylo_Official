import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useRouter} from 'expo-router';
import ButtonSecondary from '@/components/buttonSecondary';


const preferred_page: React.FC = () => {
  const navigation = useNavigation();
 const router=useRouter();
  const goToTryOnPage = () => {
    router.push('try_on'); 
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagePlaceholder}
        source={{ uri: 'https://images.filmibeat.com/img/popcorn/profile_photos/shahid-kapoor-20190619173815-177.jpg' }} 
      />
       <Text style={[styles.requirementsText, { color: '#2F4F4F' }]}>VERBAL EXPLANATION</Text>
      <View style={styles.textBox}>
      <ScrollView
  contentContainerStyle={{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: '100%', // Ensure the ScrollView takes full height of its container
  }}
>
  <Text style={[styles.textBoxContent, { color: '#2F4F4F', textAlign: 'center' }]}>
    This is the verbal explanation.
  </Text>
</ScrollView>
      </View>
      <View style={styles.additionalBox}>
        <Text style={[styles.requirementsText, { color: '#2F4F4F' }]}>PRODUCT REQUIREMENT</Text>
        <View style={styles.textBoxBelow}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, width:300, alignItems:'center' , justifyContent: 'center',height: '100%'}}>
            <Text style={[styles.textBoxContent, { color: '#2F4F4F',  textAlign: 'center' }]}>
               "product requirements".
            </Text>
          </ScrollView>
        </View>
        <TouchableOpacity style={[styles.button, {marginTop:40}]} onPress={goToTryOnPage}>
          <Text style={styles.buttonText}>Try On</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  textBox: {
    height: 100,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textBoxContent: {
    fontSize: 16,
    color: '#2F4F4F', 
  },
  requirementsText: {
    fontSize: 16,
    color: '#2F4F4F', 
  },
  additionalBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  textBoxBelow: {
    height: 100,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor:"#16A085",
    backgroundColor:"#16A085",
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350, // Width to match the image
    marginTop: 18, // Spacing similar to the image
    marginBottom: 4,
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default preferred_page;
