import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginButton({
  icon,
  iconColor,
  text,
  textColor,
  buttonColor
}) {
  const buttonStyle = {
    backgroundColor: buttonColor,
    paddingVertical: icon === undefined ? 15 : 10 
  };
  const iconStyle = {
    color: iconColor,
    marginRight: icon === undefined ? 70 : 30
  };
  const textStyle = {
    color: textColor
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      <Ionicons style={iconStyle} name={icon} size={30} color={iconColor} />
      <Text style={[styles.buttonText, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15
  },
  icon: {
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
});