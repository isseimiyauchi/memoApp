import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LogInScreen(props) {
  const { navigation } = props;
  return(
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value='Email Adress'></TextInput>
        <TextInput style={styles.input} value='Password'></TextInput>
        <Button 
          label="Submit"
          onPress={() => { 
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });}}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SineUp' }],
              })
            }}
          >
            <Text style={styles.footerLink}>Sine up Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    lineHeight: 32,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 8,
    marginVertical: 8,
  },
 
  footerText: {
    fontSize: 14,
    lineHeight: 24,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  }
});

