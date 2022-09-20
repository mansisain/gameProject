import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function BodyText(props) {
  return <Text style={{...styles.resultText}}>{props.children}</Text>;
}
const styles = StyleSheet.create({
  resultText: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 30,
    marginVertical: 15,
  },
});
