 // app/login.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Form validation schema using Yup
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginScreen: React.FC = () => {
  const router = useRouter();

  const [isPasswordShown, setIsPasswordShown] = useState(false); // Initially hide password

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        // Simulate API call or integrate with your actual backend
        const response = await fetch('http://your-backend-url/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        // Handle successful login, e.g., store token or navigate
        router.push('/(tabs)');
      } catch (error: any) {
        console.error('Login error:', error);
        Alert.alert('Error', error.message || 'An error occurred');
      }
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter your email address"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
      />
      {touched.email && errors.email && <Text>{errors.email}</Text>}

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="Enter password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry={!isPasswordShown}
        />
        <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>
          <Ionicons
            name={isPasswordShown ? 'eye-off' : 'eye'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {touched.password && errors.password && <Text>{errors.password}</Text>}

      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
