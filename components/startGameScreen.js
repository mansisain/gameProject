import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Colors from '../constants/colors';
import Input from './input';
import Cards from './cards';
import NumberContainer from './NumberContainer';
import MainButton from './MainButton';
import defaultStyles from '../constants/default-styles';
import {Keyboard} from 'react-native';

export default function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };
  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <View style={styles.summaryContainer}>
        <Cards style={styles.inputContainer}>
          <Text style={defaultStyles.txtColor}>You Selected</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <MainButton onPress={() => props.onStartGame(selectedNumber)}>
            START GAME
          </MainButton>
        </Cards>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Cards style={styles.inputContainer}>
        <Text style={defaultStyles.txtColor}>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCaptilize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={Colors.accent}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={Colors.primary}
            />
          </View>
        </View>
      </Cards>
      {confirmedOutput}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: 'black',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  buttonStyle: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    margin: 20,
    alignItems: 'center',
  },
});
