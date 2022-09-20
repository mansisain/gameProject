import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function Input(props) {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}>
      {props.children}
    </TextInput>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
