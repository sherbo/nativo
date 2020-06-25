import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';

import ActionButton from '../components/ActionButton';

export default class CreateUser extends React.Component {
	render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.buttonContainer}>
          <ActionButton 
            icon='logo-google' 
            iconColor='black' 
            text='Connect with Google' 
            textColor='#929292' 
            buttonColor='white' 
            borderColor='lightgray'
            style={{marginBottom: 15}}
            onPress={() => navigation.navigate('Home')} 
          />
          <ActionButton 
            icon='logo-facebook' 
            iconColor='white' 
            text='Connect with Facebook' 
            textColor='white' 
            buttonColor='#265288'
            style={{marginBottom: 15}}
            onPress={() => navigation.navigate('Home')} 
          />
          <ActionButton 
            icon='md-mail' 
            iconColor='white' 
            text='Create with Email' 
            textColor='white' 
            buttonColor='#d91224' 
            onPress={() => navigation.navigate('EmailLogin')} 
          />
        </View>
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
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30
  },
  buttonContainer: {
    width: '80%'
  }
});