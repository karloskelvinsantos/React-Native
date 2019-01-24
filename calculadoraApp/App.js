import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,  
} from 'react-native';
import Botao from './components/Botao';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {result: '0'}

    this.actionButton =  this.actionButton.bind(this);
  }

  actionButton(button) {
    let estado = this.state;

    if (button == 'C') {
      estado.result = '0';
    } else if ( button == '=') {
       estado.result = eval(estado.result);
    } else {
      if (estado.result == '0'){
        estado.result = button;
      } else {
        estado.result += button;
      }
    }

    this.setState(estado);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.linhaBotoes}>
          <Text style={styles.result}>{this.state.result}</Text>    
        </View>
        <View style={styles.linhaBotoes}>
          <Botao flex="3" text="C" bg="#CCCCCC" onPress={() => {this.actionButton("C")}}/>
          <Botao text="/" bg="#FD9526" onPress={() => {this.actionButton("/")}}/>        
        </View> 
        <View style={styles.linhaBotoes}>
          <Botao text="7" onPress={() => {this.actionButton("7")}}/>
          <Botao text="8" onPress={() => {this.actionButton("8")}}/>
          <Botao text="9" onPress={() => {this.actionButton("9")}}/>
          <Botao text="*" bg="#FD9526" onPress={() => {this.actionButton("*")}}/>
        </View>
        <View style={styles.linhaBotoes}>
          <Botao text="4" onPress={() => {this.actionButton("4")}}/>
          <Botao text="5" onPress={() => {this.actionButton("5")}}/>
          <Botao text="6" onPress={() => {this.actionButton("6")}}/>
          <Botao text="-" bg="#FD9526" onPress={() => {this.actionButton("-")}}/>
        </View>
        <View style={styles.linhaBotoes}>
          <Botao text="1" onPress={() => {this.actionButton("1")}}/>
          <Botao text="2" onPress={() => {this.actionButton("2")}}/>
          <Botao text="3" onPress={() => {this.actionButton("3")}}/>
          <Botao text="+" bg="#FD9526" onPress={() => {this.actionButton("+")}}/>
        </View>
        <View style={styles.linhaBotoes}>
          <Botao flex="2" text="0" onPress={() => {this.actionButton("0")}}/>
          <Botao text="." onPress={() => {this.actionButton(".")}}/>
          <Botao text="=" bg="#FD9526" onPress={() => {this.actionButton("=")}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  linhaBotoes: {
    flex: 1,
    flexDirection: 'row'
  },
  result: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 50,
    flex: 1,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 10
  }
});
