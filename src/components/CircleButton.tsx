import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { string, shape } from "prop-types";
import Feather from "react-native-vector-icons/Feather";



export default function CircleBotton(props) {
  const { style, name } = props;
  return(
    <View style={[styles.circleBotton, style]}>
      <Feather name={name} size={30} color="white" />
    </View>
  );
}

CircleBotton.propTypes = {
  style: shape,
  name: string.isRequired
};

CircleBotton.defaultProps = {
  style: null,
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