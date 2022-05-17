import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { string } from 'prop-types';

export default function Button(props: { label: any; }) {
  const { label } = props;
  return(
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired
}

const styles = StyleSheet.create ({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
});