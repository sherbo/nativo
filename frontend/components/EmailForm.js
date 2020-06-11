import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import LoginButton from './LoginButton';

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onLogin() {
    const { username, password } = this.state;

    console.log('yaa duu');
  }

	render() {
    return (
      <View>
        <LoginButton icon='md-mail' iconColor='white' buttonColor='#d91224' />
        <TextInput 
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'User:'}
          placeholderTextColor='black'
          style={styles.input}
        />
        <TextInput 
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password:'}
          secureTextEntry={true}
          placeholderTextColor='black'
          style={styles.input}
        />
        <LoginButton text='Create Account' textColor='black' buttonColor='#ffefc9' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  input: {
    color: 'black',
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});