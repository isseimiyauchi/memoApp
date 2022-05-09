import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CircleBotton() {
  return(
    <View style={styles.circleBotton}>
      <Text style={styles.circleBottonLabel}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  circleBotton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 8, 
  },
  circleBottonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  }
});