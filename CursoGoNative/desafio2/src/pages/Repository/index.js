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

      if (response.data) {
        let repository = {};
        repository.name = response.data.name;
        repository.full_name = response.data.full_name;
        repository.id = response.data.id;

        if (response.data.organization) {
          repository.organization = {};
          repository.organization.login = response.data.organization.login;
          repository.organization.avatar_url =
            response.data.organization.avatar_url;
        }

        if (response.data.owner) {
          repository.owner = {};
          repository.owner.login = response.data.owner.login;
          repository.owner.avatar_url = response.data.owner.avatar_url;
        }

        let repositories = this.state.data;
        repositories.push(repository);

        this.setState({
          data: repositories
        });

        await AsyncStorage.setItem(
          "@GithubExplore:repositories",
          JSON.stringify(this.state.data)
        );
      }

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
          style={styles.flatListRepositories}
          data={this.state.data}
          keyExtractor={item => String(item.id)}
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
              description={
                item.organization ? item.organization.login : item.owner.login
              }
              image={
                item.organization
                  ? item.organization.avatar_url
                  : item.owner.avatar_url
              }
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
    backgroundColor: "#DCDCDC"
  },
  containerSearch: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 20,
    marginBottom: 20,
    justifyContent: "space-around"
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
  flatListRepositories: {
    marginLeft: 10,
    marginRight: 10
  }
});
