import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Cards(props) {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
}
const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
  },
});
