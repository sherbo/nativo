import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddPackButton() {
	return (
    <TouchableOpacity>
      <Ionicons name='md-add-circle-outline' size={60} color='#1ad856' />
    </TouchableOpacity>
  )
}