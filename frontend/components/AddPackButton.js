import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddPackButton({ onPress }) {
	return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name='md-add-circle-outline' size={60} color='#1ad856' />
    </TouchableOpacity>
  )
}