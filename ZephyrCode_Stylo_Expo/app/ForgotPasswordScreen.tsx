import { StyleSheet, Image,Text,TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Inputtextname,Buttoncolor } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import React,{ useState } from 'react';
import Checkbox from 'expo-checkbox';
import Button from '@/components/buttons';
import ButtonSecondary from '@/components/buttonSecondary';
import { Link, useRouter } from 'expo-router';
import axiosInstance from '@/constants/axiosInstance';
import { Formik, FormikProps } from 'formik'; // Import Formik and FormikProps
import * as yup from 'yup';
import { Alert } from 'react-native';


// Define the shape of your form values
interface FormValues {
  userName: string;
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  userName: yup.string().required('User Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});
  
const ForgotPasswordScreen = () => {
  const handleForgotPassword = async (values: { email: string }) => {
    try {
      await axiosInstance.post('/forgot-password', values);
      Alert.alert('Success', 'Password reset link sent to your email.');
    } catch (error) {
      Alert.alert('Error', 'Failed to send password reset link.');
    }
  };

  return (
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleForgotPassword}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#2C3E50', dark: '#353636' }}
          headerTitle="Forgot ?"
          headerSubtitle='Reset your password'
        >
          <Text style={styles.header}>Forgot Password</Text>
            <TextInput
              placeholder="Enter your email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              style={styles.input}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <Button title="Send Reset Link" onPress={handleSubmit} />
            </ParallaxScrollView>
        )}
      </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ForgotPasswordScreen;
