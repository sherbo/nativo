import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import LoginButton from '../components/LoginButton';
import EmailForm from '../components/EmailForm';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.buttonContainer}>
        <LoginButton icon='logo-google' iconColor='black' text='Sign in with Google' textColor='#929292' buttonColor='white' />
        <LoginButton icon='logo-facebook' iconColor='white' text='Sign in with Facebook' textColor='white' buttonColor='#265288' />
        <LoginButton icon='md-mail' iconColor='white' text='Sign in with Email' textColor='white' buttonColor='#d91224' />
        <LoginButton text='Create Account' textColor='black' buttonColor='#ffefc9' />
      </View>
      <View style={styles.loginContainer}>
        <EmailForm />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 300,
  },
  loginContainer: {
    width: 300,
  },
  logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    marginBottom: 30
  },
});