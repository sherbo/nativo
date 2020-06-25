import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Navbar from '../components/Navbar';
import ActionButton from '../components/ActionButton';

export default function Profile({ navigation }) {
	return (
    <SafeAreaView style={styles.container}>
      <Navbar style={styles.navbar} onPress={() => navigation.navigate('Profile')} />
      <View style={styles.buttonContainer}>
        <ActionButton 
          text='Manage Decks' 
          textColor='black' 
          buttonColor='#ffefc9'
          style={{marginBottom: 15}}
          onPress={() => navigation.navigate('DeckEditor')} 
        />
        <ActionButton 
          text='Change Password' 
          textColor='black' 
          buttonColor='#ffefc9'
          style={{marginBottom: 15}}
          onPress={() => navigation.navigate('Profile')} 
        />
        <ActionButton 
          text='Delete Account' 
          textColor='black' 
          buttonColor='#ffefc9'
          style={{marginBottom: 15}}
          onPress={() => navigation.navigate('Profile')} 
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '15%',
    paddingRight: '15%'
  }
});