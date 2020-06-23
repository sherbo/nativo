import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default function Navbar({ onPress }) {
	return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../assets/logo.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../assets/userAvatar.png')} />
      </TouchableOpacity>
    </View>
  )
}
