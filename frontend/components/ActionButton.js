import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ActionButton({
  icon,
  iconColor,
  text,
  textColor,
  buttonColor,
  borderColor,
  onPress
}) {
  const buttonStyle = {
    backgroundColor: buttonColor,
    paddingVertical: icon === undefined ? 15 : 10,
    borderColor: borderColor === undefined ? 'transparent' : borderColor
  };
  const iconStyle = {
    color: iconColor,
    marginRight: icon === undefined ? 0 : 30
  };
  const textStyle = {
    color: textColor,
    textAlign: icon === undefined ? 'center' : 'left'
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Ionicons style={iconStyle} name={icon} size={30} color={iconColor} />
      <View style={styles.textContainer}>
        <Text style={[styles.buttonText, textStyle]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
    borderWidth: 2
  },
  textContainer: {
    width: '100%'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});