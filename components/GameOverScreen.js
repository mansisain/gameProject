import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from '../constants/colors';
import MainButton from './MainButton';
import BodyText from './BodyText';

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOverTxt}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.jpeg')}
          resizeMode="cover"
        />
      </View>
      <BodyText>
        Your phone needed
        <Text style={styles.highlight}> {props.roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {props.userNumber} </Text>
      </BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverTxt: {
    color: 'black',
    fontSize: 18,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  highlight: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
