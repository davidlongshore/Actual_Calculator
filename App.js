import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

{
  /* have finished with DEL and AC keys. also the numbers also. */
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resultText: '',
      calcText: 'Ansewrs will be here.',
    };
  }
  onClickOperation = (operation) => {
    let oporations = ['DEL', '+', '-', '/', '*'];
    if (operation == 'DEL') {
      this.setState({
        resultText: this.state.resultText
          .toString()
          .substring(
            0,
            this.state.resultText.toString().substring().length - 1
          ),
      });
      return;
    }
    if (operation == 'AC') {
      this.setState({
        resultText: '',
      });
      return;
    }
    if (oporations.includes(this.state.resultText.toString().split('').pop())) {
      console.log('y r we here.');
      return;
    }
    this.setState({ resultText: this.state.resultText + operation });
  };
  onButtonClick = (text) => {
    console.log(text);

    if (text == '=') {
      this.calculateResult();
      return;
    }
    this.setState({
      resultText: this.state.resultText + text,
    });
  };
  calculateResult = () => {
    // console.log(this.state.resultText);
    console.log(eval(this.state.resultText));
    this.setState({ calcText: eval(this.state.resultText) });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Calculator</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.calculateText}>{this.state.calcText}</Text>
        </View>
        <View style={styles.calculations}>
          <Text style={{ fontSize: 20 }}>{this.state.resultText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(1);
                }}>
                <Text style={styles.keyText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(2);
                }}>
                <Text style={styles.keyText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(3);
                }}>
                <Text style={styles.keyText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(4);
                }}>
                <Text style={styles.keyText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(5);
                }}>
                <Text style={styles.keyText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(6);
                }}>
                <Text style={styles.keyText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(7);
                }}>
                <Text style={styles.keyText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(8);
                }}>
                <Text style={styles.keyText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(9);
                }}>
                <Text style={styles.keyText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick('.');
                }}>
                <Text style={styles.keyText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick(0);
                }}>
                <Text style={styles.keyText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onClickOperation('DEL');
                }}>
                <Text style={styles.keyText}>DEL</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onClickOperation('AC');
                }}>
                <Text style={styles.keyText}>AC</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.numberKeys}
                onPress={() => {
                  this.onButtonClick('=');
                }}>
                <Text style={styles.keyText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.oporations}>
            <TouchableOpacity
              style={styles.numberKeys}
              onPress={() => {
                this.onClickOperation('+');
              }}>
              <Text style={styles.keyText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberKeys}
              onPress={() => {
                this.onButtonClick('-');
              }}>
              <Text style={styles.keyText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberKeys}
              onPress={() => {
                this.onButtonClick('*');
              }}>
              <Text style={styles.keyText}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberKeys}
              onPress={() => {
                this.onButtonClick('/');
              }}>
              <Text style={styles.keyText}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numberKeys: {
    backgroundColor: 'black',
    width: 50,
    height: 40,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'grey',
    margin: 5,
  },
  keyText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 35,
    textAlign: 'center',
    color: 'red',
  },
  oporations: {
    flex: 1,
    backgroundColor: 'navy',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'blue',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  title: {
    flex: 1,
    backgroundColor: 'black',
  },
  result: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'flex-end',
    color: 'white',
  },
  calculations: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'flex-end',
  },
  calculateText: {
    fontSize: 20,
    color: 'cyan',
  },
});
