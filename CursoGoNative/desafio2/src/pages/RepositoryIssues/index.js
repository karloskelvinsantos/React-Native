import React, { Component } from "react";

import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import api from "~/services/api";

// import styles from './styles';

export default class RepositoryIssues extends Component {
  state = {
    title: "",
    stateIssue: "all",
    page: 1
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("repositoryName", "")
    };
  };

  async componentDidMount() {
    this.findIssues();
  }

  findIssues = async () => {
    const repository = this.props.navigation.getParam("repositoryFullName", "");

    try {
      const response = await api.get(
        `${repository}/issues?state=${this.state.stateIssue}&${this.state.page}`
      );

      console.tron.log(response);
    } catch (error) {
      console.tron.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewButtons}>
          <TouchableOpacity style={styles.containerButtons}>
            <Text style={styles.textButton}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerButtons}>
            <Text style={styles.textButton}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerButtons}>
            <Text style={styles.textButton}>Fechadas</Text>
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
  viewButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#C0C0C0",
    borderRadius: 5
  },
  containerButtons: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  }
});
