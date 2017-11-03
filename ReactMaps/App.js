import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {

  state = {
    latitude: -7.213623,
    longitude: -39.328866,
  }

  render() {
    const { latitude, longitude } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsBuildings={false}
          showsPointsOfInterest={false}
        >
          <MapView.Marker
            coordinate={{
              latitude: -7.213623,
              longitude: -39.328866,
            }}
          />
        </MapView>
        <ScrollView 
          style={styles.placesContainer}
          horizontal
          >
            <View style={styles.place}></View>
            <View style={styles.place}></View>
        </ScrollView>
      </View>
    );
  }
}

const { height, width } = Dimensions.get( 'window' );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },

  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },

  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
});
