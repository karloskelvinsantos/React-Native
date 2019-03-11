import React, { Component } from "react";

import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "~/pages/RepositoryIssues/styles";
import api from "~/services/api";
import ItemList from "~/components/ItemList";

export default class RepositoryIssues extends Component {
  state = {
    stateIssue: "all",
    refreshing: false,
    issues: [],
    page: 1
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("repositoryName", "")
    };
  };

  componentWillMount() {
    this.findIssues();
  }

  findIssues = async () => {
    if (this.state.refreshing) return;

    const { page } = this.state;

    await this.setState({ refreshing: true });

    const repository = this.props.navigation.getParam("repositoryFullName", "");

    try {
      const { data } = await api.get(
        `${repository}/issues?state=${this.state.stateIssue}&page=${
          this.state.page
        }`
      );

      await this.setState({
        issues: [...this.state.issues, ...data],
        refreshing: false,
        page: page + 1
      });
    } catch (error) {
      console.tron.log(error);
    }
  };

  handleButtonAll = async () => {
    await this.setState({
      stateIssue: "all",
      page: 1,
      issues: []
    });

    this.findIssues();
  };

  handleButtonOpen = async () => {
    await this.setState({
      stateIssue: "open",
      page: 1,
      issues: []
    });

    this.findIssues();
  };

  handleButtonClosed = async () => {
    await this.setState({
      stateIssue: "closed",
      page: 1,
      issues: []
    });

    this.findIssues();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewButtons}>
          <TouchableOpacity
            style={styles.containerButtons}
            onPress={this.handleButtonAll}
          >
            <Text style={styles.textButton}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerButtons}
            onPress={this.handleButtonOpen}
          >
            <Text style={styles.textButton}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerButtons}
            onPress={this.handleButtonClosed}
          >
            <Text style={styles.textButton}>Fechadas</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.flatListIssues}
          data={this.state.issues}
          keyExtractor={item => String(item.id)}
          refreshing={this.state.refreshing}
          onRefresh={() => {}}
          onEndReached={this.findIssues}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <ItemList
              onClick={() => {}}
              title={item.title}
              description={item.user.login}
              image={item.user.avatar_url}
            />
          )}
        />
      </View>
    );
  }
}
