import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todo: [
      { id: 0, text: 'Fazer Café' },
      { id: 1, text: 'Estudar React Native'},
    ]
  };

  addTodo = () => {
    this.setState({
      todo: ([ ...this.state.todo,  {id: Math.random(), text: 'Novo Todo'} ])
    });
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.todo.map(todo => (
           <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
