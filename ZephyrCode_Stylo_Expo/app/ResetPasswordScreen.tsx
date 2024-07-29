import React from 'react';
import { StyleSheet, Text, TextInput, Alert, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { RouteProp } from '@react-navigation/native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Button from '@/components/buttons';
import axiosInstance from '@/constants/axiosInstance';

// Define the shape of your route params
type RouteParams = {
  ResetPassword: {
    token: string;
  };
};

// Define the props for the component
type Props = {
  route: RouteProp<RouteParams, 'ResetPassword'>;
};

// Define the shape of your form values
interface FormValues {
  token: string;
  password: string;
}

const validationSchema = yup.object().shape({
  token: yup.string().required('Token is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const ResetPasswordScreen: React.FC<Props> = ({ route }) => {
  const { token } = route.params;

  const handleResetPassword = async (values: FormValues) => {
    try {
      await axiosInstance.post('/reset-password', values);
      Alert.alert('Success', 'Password has been updated.');
    } catch (error) {
      Alert.alert('Error', 'Failed to reset password.');
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ token, password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleResetPassword}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <ParallaxScrollView
            headerBackgroundColor={{ light: '#2C3E50', dark: '#353636' }}
            headerTitle="Enter your Token"
            headerSubtitle='Create new password'
          >
            <Text style={styles.header}>Reset Password</Text>
            <TextInput
              placeholder="Enter your token"
              value={values.token}
              onChangeText={handleChange('token')}
              onBlur={handleBlur('token')}
              style={styles.input}
              editable={false}
            />
            <TextInput
              placeholder="Enter new password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={styles.input}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Button title="Reset Password" onPress={handleSubmit} />
          </ParallaxScrollView>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default ResetPasswordScreen;