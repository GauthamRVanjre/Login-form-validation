// Import React
import React from 'react';
import { View } from 'react-native';

// Import the LoginForm component
import LoginForm from './LoginForm';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LoginForm />
    </View>
  );
};

export default App;