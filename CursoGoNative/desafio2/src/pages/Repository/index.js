import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import ItemList from "~/components/ItemList";

import api from "~/services/api";

export default class Repository extends Component {
  state = {
    refreshing: false,
    repository: "",
    data: []
  };

  static navigationOptions = {
    title: "GitHub Explorer"
  };

  inputSearchChange = repository => {
    this.setState({ repository: repository });
  };

  findRepositoriesIssues = async () => {
    this.setState({ refreshing: !this.state.refreshing });
    try {
      const response = await api.get(this.state.repository);

      this.setState({
        data: [response.data, ...this.state.data]
      });

      await AsyncStorage.setItem(
        "@GithubExplore:repositories",
        JSON.stringify(this.state.data)
      );

      console.tron.log(this.state.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert("Repositório não encontrado!");
      } else {
        alert("Ops, tivemos um erro, tente novamente!");
      }
    }

    this.setState({ repository: "", refreshing: !this.state.refreshing });
  };

  async componentWillMount() {
    const repositories = await AsyncStorage.getItem(
      "@GithubExplore:repositories"
    );

    this.setState({ data: JSON.parse(repositories) });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <TextInput
            value={this.state.repository}
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
          data={this.state.data}
          keyExtractor={item => item.node_id}
          refreshing={this.state.refreshing}
          onRefresh={() => {}}
          renderItem={({ item }) => (
            <ItemList
              onClick={() => {
                this.props.navigation.navigate("RepositoryIssues", {
                  repositoryName: item.name,
                  repositoryFullName: item.full_name
                });
              }}
              title={item.name}
              description={item.organization.login}
              image={item.organization.avatar_url}
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
