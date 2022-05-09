import React, { Props } from "react";
import { StyleSheet, View, Text } from "react-native";
import { string, bool, shape } from "prop-types";

export default function Hello(props) {
  const { children, bang, style } = props;
  return(
    <View>
      <Text style={styles.text, sty}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

Hello.prototype = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create ({
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});