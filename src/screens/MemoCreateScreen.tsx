import React, { useState } from "react";
import { StyleSheet, View, TextInput, KeyboardAvoidingView } from "react-native";
import CircleBotton from "../components/CircleButton";

import firebase from "firebase/compat/app";

export default function MemoCreateScreen(props: { navigation: any; }) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('Create!', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput 
          value={bodyText} 
          multiline 
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </View>
      <CircleBotton 
      name="check" 
      onPress={handlePress}
      />
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