import React, { Component } from 'react';

import {
  View
} from 'react-native';

import { LoginButton, AccessToken } from 'react-native-fbsdk';

import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled){
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}
        />
      </View>
    );
  }
}
