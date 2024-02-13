import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [screenValue, setScreenValue] = useState('0');
  const [prevValue, setPrevValue] = useState('');

  const appendToScreen = (value) => {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (prevValue !== '') {
        calculateResult();
      }
      setPrevValue(screenValue + value);
      setScreenValue('0');
    } else if (value === '+/-') {
      setScreenValue((prevValue) => {
        if (prevValue === '0') {
          return '0'; // No se puede cambiar el signo de cero
        }
        if (prevValue.startsWith('-')) {
          return prevValue.substring(1); // Elimina el signo negativo si ya lo tiene
        } else {
          return '-' + prevValue; // Agrega un signo negativo si no lo tiene
        }
      });
    } else if (value === '%') {
      
      const currentValue = parseFloat(screenValue);
      const result = currentValue / 100;
      setScreenValue(result.toString());
    } else if (value === '√') {
      
      const currentValue = parseFloat(screenValue);
      if (currentValue >= 0) {
        const result = Math.sqrt(currentValue);
        setScreenValue(result.toString());
      } else {
        setScreenValue('Error');
      }
    } else if (value === 'x²') {
      
      const currentValue = parseFloat(screenValue);
      const result = currentValue * currentValue;
      setScreenValue(result.toString());
    } else if (value === '1/x') {
      
      const currentValue = parseFloat(screenValue);
      if (currentValue !== 0) {
        const result = 1 / currentValue;
        setScreenValue(result.toString());
      } else {
        setScreenValue('Error');
      }
    } else {
      setScreenValue((prevValue) => {
        if (screenValue === '0') {
          return value;
        }
        if (/[*/+-]$/.test(prevValue) || (value === '.' && /\.$/.test(prevValue))) {
          return prevValue;
        }
        if (value === '.' && /\d*\.\d*$/.test(prevValue)) {
          return prevValue;
        }
        if (value === '.' && /^[*/+-]$/.test(prevValue)) {
          return prevValue + '0' + value;
        }
        if ((value === '+' || value === '-') && !/^[*/+-.]$/.test(prevValue)) {
          return value + prevValue;
        }
        return prevValue + value;
      });
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(prevValue + screenValue);
      setScreenValue(result.toString());
      setPrevValue('');
    } catch (error) {
      setScreenValue('Error');
    }
  };

  const clearScreen = () => {
    setScreenValue('0');
    setPrevValue('');
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
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('√')}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('x²')}>
          <Text style={styles.buttonText}>x²</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('1/x')}>
          <Text style={styles.buttonText}>1/x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCE} onPress={() => clearScreen()}>
          <Text style={styles.buttonText}>CE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => clearScreen()}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => deleteLastCharacter()}>
          <Text style={styles.buttonText}>⌫</Text>
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
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => appendToScreen('1')}>
          <Text style={styles.buttonText}>1</Text>
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
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  screen: {
    backgroundColor: '#3b3a3a',
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
    marginTop: 60, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '23%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#504f4fe5',
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
