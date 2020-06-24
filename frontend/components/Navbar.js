import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

export default function Navbar({ onPress }) {
	return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../assets/logo.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={{marginTop: 10, marginRight:10}}>
        <FontAwesome name='user-circle' size={60} color='#415366' />
      </TouchableOpacity>
    </View>
  )
}
