import React from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import AppBar from "../components/AppBar";
import CircleBotton from "../components/CircleButton";

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value='買い物リスト' multiline style={styles.input} />
      </View>
      <CircleBotton 
      name="check" 
      onPress={() => { navigation.goBack();}} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical:32,
    flex:1,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: 'top'
  }
});