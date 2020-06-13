import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import LoginButton from './LoginButton';

export default class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmedPassword: ''
    };
  }

  onLogin() {
    const { oldPassword, newPassword } = this.state;

    console.log('yaa duu');
  }

  checkPassword() {

  }

	render() {
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.username}
          onChangeText={(username) => this.setState({ oldPassword })}
          placeholder={'Old Password'}
          secureTextEntry={true}
          placeholderTextColor='black'
          style={styles.input}
        />
        <TextInput 
          value={this.state.newPassword}
          onChangeText={(password) => this.setState({ newPassword })}
          placeholder={'New Password'}
          secureTextEntry={true}
          placeholderTextColor='black'
          style={styles.input}
        />
        <TextInput 
          value={this.state.confirmedPassword}
          onChangeText={(password) => this.setState({ confirmedPassword })}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          placeholderTextColor='black'
          style={styles.input}
        />
        <LoginButton text='Submit' textColor='black' buttonColor='#ffefc9' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#bcd6f4',
    padding: 20,
    borderRadius: 20
  },
  input: {
    color: 'black',
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  }
});