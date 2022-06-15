import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../components/AppBar";
import MemoList from "../components/MemoList";
import CircleBotton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";

export default function MemoListScreen(props: { navigation: any; }) {
  const { navigation } = props
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);
  return(
    <View style={styles.container}>
      <MemoList />
      <CircleBotton 
      name="plus"
      onPress={() => { navigation.navigate('MemoCreate'); }}
      />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  }, 
})