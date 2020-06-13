import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Navbar() {
	return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Image source={require('../assets/logo.png')} />
      <Image source={require('../assets/userAvatar.png')} />
    </View>
  )
}
