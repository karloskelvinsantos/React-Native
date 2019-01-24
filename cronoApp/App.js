import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {timer: 0, textButton: 'INICIAR'};
    this.timer = null;
  }

  iniciar = () => {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ textButton: 'INICIAR' });
    } else {
      this.timer = setInterval(() => {
        let tempo = this.state;
        tempo.timer += 0.1;
        this.setState(tempo);
      }, 100);

      this.setState({ textButton: 'PARAR' });
    }
  }

  zerar = () => {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({ timer: 0, textButton: 'INICIAR' });
  }


  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/relogio.png')}/>
        <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.buttons} onPress={this.iniciar}>
            <Text style={styles.textButtons}>{this.state.textButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={this.zerar}>
            <Text style={styles.textButtons}>ZERAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c1f30'
  },
  timer: {
    color: '#baa07a',
    fontSize: 60,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: -145
  },
  containerButtons: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#886532',
    height: 40,
    borderRadius: 4,
    margin: 20,
  },
  textButtons: {
    color: '#FFF',
    fontSize: 18,
  }

 
});
