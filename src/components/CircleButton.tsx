import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { string, shape, func } from "prop-types";
import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();


export default function CircleBotton(props: { style : any; name : any; onPress: any; }) {
  const { style, name, onPress } = props;
  return(
    <TouchableOpacity style={[styles.circleBotton, style]} onPress={onPress}>
      <Feather name={name} size={30} color="white" />
    </TouchableOpacity>
  );
}

CircleBotton.propTypes = {
  style: shape,
  name: string.isRequired,
  onPress: func,
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