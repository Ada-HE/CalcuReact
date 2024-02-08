import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [screenValue, setScreenValue] = useState('0');

  const appendToScreen = (value) => {
    setScreenValue((prevValue) => {
      if (prevValue === '0') {
        return value;
      }
      return prevValue + value;
    });
  };

  const calculateResult = () => {
    try {
      setScreenValue(eval(screenValue).toString());
    } catch (error) {
      setScreenValue('Error');
    }
  };

  const clearScreen = () => {
    setScreenValue('0');
  };

  const deleteLastCharacter = () => {
    setScreenValue((prevValue) => {
      return prevValue.slice(0, -1);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.screenText}>{screenValue}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonCE} onPress={() => clearScreen()}>
          <Text style={styles.buttonText}>CE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => deleteLastCharacter()}>
          <Text style={styles.buttonText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => clearScreen()}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('+/-')}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={() => calculateResult()}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ffff',
  },
  screen: {
    backgroundColor: '#000000',
    padding: 30,
    width: '100%',
    alignItems: 'flex-end',
  },
  screenText: {
    color: '#ffffff',
    fontSize: 30,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '23%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    margin: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  buttonCE: {
    width: '23%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8000',
    borderRadius: 10,
    margin: 2,
  },
  equalButton: {
    backgroundColor: '#ff8000',
  },
});

export default Calculator;
