import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';

import LoginButton from '../components/LoginButton';
import EmailForm from '../components/EmailForm';

export default class Login extends React.Component {
  state = {
    signup: false,
    emailLogin: false
  };

  render() {
    const { signup, emailLogin } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        {(!signup && !emailLogin) && (
          <View style={styles.buttonContainer}>
            <LoginButton icon='logo-google' iconColor='black' text='Sign in with Google' textColor='#929292' buttonColor='white' />
            <LoginButton icon='logo-facebook' iconColor='white' text='Sign in with Facebook' textColor='white' buttonColor='#265288' />
            <LoginButton icon='md-mail' iconColor='white' text='Sign in with Email' textColor='white' buttonColor='#d91224' />
            <LoginButton text='Create Account' textColor='black' buttonColor='#ffefc9' />
          </View>
        )}
        {(!signup && emailLogin) && (
          <View style={styles.loginContainer}>
            <EmailForm />
          </View>
        )}
        {signup && (
          <View style={styles.createContainer}>
            <LoginButton icon='logo-google' iconColor='black' text='Connect with Google' textColor='#929292' buttonColor='white' />
            <LoginButton icon='logo-facebook' iconColor='white' text='Connect with Facebook' textColor='white' buttonColor='#265288' />
            <LoginButton icon='md-mail' iconColor='white' text='Connect with Email' textColor='white' buttonColor='#d91224' />
          </View>
        )}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 300,
  },
  loginContainer: {
    width: 300,
  },
  createContainer: {
    width: 300,
  },
  logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    marginBottom: 30
  },
});