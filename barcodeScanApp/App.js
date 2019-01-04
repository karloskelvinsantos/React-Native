import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Camera: { screen: CameraScreen },
  },
  {
    initialRouteName: "Home"
  } 
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}