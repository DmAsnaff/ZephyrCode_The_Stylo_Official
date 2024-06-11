import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

const Help4: React.FC = () => {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/img_4.png')}
          style={styles.image}
          accessibilityLabel="Instructional Image"
        />
      </ThemedView>

      <ThemedText style={styles.stepText}>Step 04</ThemedText>
      
      <ThemedText style={styles.instructionText}>
      Your background should be plain
      </ThemedText>

      <View style={styles.footer}>
      <TouchableOpacity onPress={() => router.push('/tab')}>
          <ThemedText style={styles.footerTextBold}>DONE</ThemedText>
        </TouchableOpacity>
        
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
  },
  stepText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2F4F4F',
    marginVertical: 10,
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2F4F4F',
    marginVertical: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  footerTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
});

export default Help4;
