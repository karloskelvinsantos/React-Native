import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import ItemList from "~/components/ItemList";

export default class Repository extends Component {
  state = {
    repository: ""
  };

  static navigationOptions = {
    title: "Repositórios"
  };

  inputSearchChange = repository => {
    this.setState({ repository: repository });
    //alert(this.state.repository);
  };

  findRepositoriesIssues = () => {
    //alert("Clicou");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Adicionar novo repositório"
            onChangeText={this.inputSearchChange}
          />
          <TouchableOpacity
            onPress={this.findRepositoriesIssues}
            style={styles.buttonSearch}
          >
            <Icon name="plus" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[
            {
              id: "1",
              repositorio: "asdasd",
              descricao: "asdas",
              image:
                "https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67"
            },
            {
              id: "1",
              repositorio: "asdasd",
              descricao: "asdas",
              image:
                "https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67"
            }
          ]}
          renderItem={({ item }) => (
            <ItemList
              title={item.repositorio}
              description={item.descricao}
              image={item.image}
            />
          )}
        />
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
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30
  },
  inputSearch: {
    flex: 2,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "white"
  },
  buttonSearch: {
    marginTop: 5
  },
  containerList: {
    marginTop: 30
  }
});
