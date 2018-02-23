import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Karlos Kelvin Santos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '+
               'Morbi non viverra est, sit amet sollicitudin erat. '+
               'Mauris nec elit interdum, commodo ipsum quis, finibus lorem. '+
               'Mauris at enim ipsum. Etiam posuere lectus vitae imperdiet tempor. ',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Karlos Kelvin Santos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '+
               'Morbi non viverra est, sit amet sollicitudin erat. '+
               'Mauris nec elit interdum, commodo ipsum quis, finibus lorem. '+
               'Mauris at enim ipsum. Etiam posuere lectus vitae imperdiet tempor. ',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Karlos Kelvin Santos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '+
               'Morbi non viverra est, sit amet sollicitudin erat. '+
               'Mauris nec elit interdum, commodo ipsum quis, finibus lorem. '+
               'Mauris at enim ipsum. Etiam posuere lectus vitae imperdiet tempor. ',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textGoNative}>GoNative App</Text>
        <ScrollView style={styles.estiloScroll}>
          {this.state.posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} description={post.description}/>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  textGoNative: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    color: '#333333',
  },
  estiloScroll: {
    paddingRight: 20,
    paddingLeft: 20,
  },
});
