import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { View, TextInput, Button, Text } from 'react-native';

// Import Formik and Yup
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const loginForm = () => {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle login logic here, I am just logging the data in my console
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
  
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
            />
            {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
  
            <Button onPress={handleSubmit} title="Login" />
          </View>
        )}
      </Formik>
    );
  };

const styles = StyleSheet.create({})

export default loginForm