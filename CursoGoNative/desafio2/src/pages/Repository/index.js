import React, { Component } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import ItemList from "~/components/ItemList";

export default class Repository extends Component {
  static navigationOptions = {
    title: "Repositórios"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Adicionar novo repositório"
          />
          <TouchableOpacity onPress={() => {}} style={styles.buttonSearch}>
            <Icon name="plus" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#DCDCDC"
  },
  containerSearch: {
    flexDirection: "row"
  },
  inputSearch: {
    flex: 2,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    backgroundColor: "white"
  },
  buttonSearch: {
    marginTop: 5
  },
  containerList: {
    marginTop: 30
  }
});
