import React from 'react';
import { Button, View } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

const LogIn: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title='Login'
        onPress={() => {
          signIn();
        }} />
    </View>
  );
}

export default LogIn;