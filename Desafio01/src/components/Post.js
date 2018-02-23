import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Post = ({ title, author, description }) => (
  <View style={styles.container}>
    <Text style={styles.tituloPost}>{title}</Text>
    <Text style={styles.authorPost}>{author}</Text>
    <View style={styles.viewLinha}/>
    <Text style={styles.descriptionPost}>{description}</Text>
  </View>
);

Post.defaultProps = {
  title: 'Aprendendo React Native',
  author: 'Karlos Kelvin Santos',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '+
               'Morbi non viverra est, sit amet sollicitudin erat. '+
               'Mauris nec elit interdum, commodo ipsum quis, finibus lorem. '+
               'Mauris at enim ipsum. Etiam posuere lectus vitae imperdiet tempor. ',
};

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 20,
    borderRadius: 5,
  },
  viewLinha: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 5,
    marginBottom:5,
  },
  tituloPost: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
  authorPost: {
    color: '#999999',
    fontSize: 12,
  },
  descriptionPost: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default Post;
