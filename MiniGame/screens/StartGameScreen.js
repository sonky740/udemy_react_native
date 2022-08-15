import { useState } from 'react';
import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    console.log('Valid Number!');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsConatiner}>
        <PrimaryButton title="Reset" onPress={resetInputHandler} />
        <PrimaryButton title="Confirm" onPress={confirmInputHandler} />
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#72063c',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 }, // IOS 전용
    shadowRadius: 6, // IOS 전용
    shadowOpacity: 0.25, // IOS 전용
    elevation: 4, // AOS 전용
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
  },
  buttonsConatiner: {
    flexDirection: 'row',
  },
});
