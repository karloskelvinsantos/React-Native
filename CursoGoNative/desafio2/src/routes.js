import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Repository from "~/pages/Repository";
import RepositoryIssues from "~/pages/RepositoryIssues";

// import styles from './styles';

const AppNavigator = createStackNavigator(
  {
    Repository: {
      screen: Repository
    },
    RepositoryIssues: {
      screen: RepositoryIssues
    }
  },
  {
    initialRouteName: "Repository"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () => <AppContainer />;
