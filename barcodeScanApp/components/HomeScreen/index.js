import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigation } = this.props;
    const barcode = navigation.getParam('barcode', '');

    return (
      <View style={styles.container}>
        <Button 
          onPress={() => {
            console.log("ButtonClick")
            this.props.navigation.navigate('Camera');
          }}
          title="Scan BarCode"
          color="#841584"
        />

        <Text numberOfLines={3}>Código de Barras: {barcode}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCodigo: {

  }
});
