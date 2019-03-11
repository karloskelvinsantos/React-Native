import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from "react-native";
import styles from "~/pages/Repository/styles";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import ItemList from "~/components/ItemList";

import api from "~/services/api";

export default class Repository extends Component {
  state = {
    refreshing: false,
    repository: "",
    dataRepositories: []
  };

  static navigationOptions = {
    title: "GitHub Explorer"
  };

  inputSearchChange = repository => {
    this.setState({ repository: repository });
  };

  findRepositoriesIssues = async () => {
    const { dataRepositories } = this.state;

    this.setState({ refreshing: !this.state.refreshing });
    try {
      const { data } = await api.get(this.state.repository);

      this.setState({
        dataRepositories: [...dataRepositories, data]
      });

      await AsyncStorage.setItem(
        "@GithubExplore:repositories",
        JSON.stringify([...dataRepositories, data])
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
    const repositories = JSON.parse(
      await AsyncStorage.getItem("@GithubExplore:repositories")
    );

    this.setState({ dataRepositories: repositories || [] });
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
          data={this.state.dataRepositories}
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
