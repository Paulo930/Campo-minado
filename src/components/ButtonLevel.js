import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default props => (
  <TouchableOpacity
    style={[styles.button, props.styleLevel]}
    onPress={() => props.onLevelSelected(props.level)}>
    <Text stylw={styles.buttonLabel}>{props.label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold',
  },
});
