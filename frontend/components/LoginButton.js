import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LoginButton({
  text,
  textColor,
  buttonColor
}) {
  const buttonStyle = {
    backgroundColor: buttonColor
  };
  const textStyle = {
    color: textColor
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});