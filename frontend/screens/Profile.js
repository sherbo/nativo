import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import LoginButton from '../components/LoginButton';
import DeckOption from '../components/DeckOption';
import ChangePassword from '../components/ChangePassword';

export default function Profile() {
	return (
    <SafeAreaView style={styles.container}>
      {/*<LoginButton text='Manage Decks' textColor='black' buttonColor='#ffefc9' />
      <LoginButton text='Change Password' textColor='black' buttonColor='#ffefc9' />
      <LoginButton text='Delete Account' textColor='black' buttonColor='#ffefc9' />
      <DeckOption />
      <DeckOption />
      <DeckOption />*/}
      <ChangePassword />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});