import { Image, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import React from 'react';

import LoginButton from './LoginButton';

export default function Login() {
  return (
    <View style={styles.loginContainer}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View>
        <LoginButton text='Sign in with Google' textColor='#929292' buttonColor='white' />
        <LoginButton text='Sign in with Facebook' textColor='white' buttonColor='#265288' />
        <LoginButton text='Sign in with Email' textColor='white' buttonColor='#d91224' />
        <LoginButton text='Create Account' textColor='black' buttonColor='#ffefc9' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    marginBottom: 30
  },
});