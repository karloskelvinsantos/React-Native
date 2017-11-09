import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';

import MapView from 'react-native-maps';

const { height, width } = Dimensions.get( 'window' );

export default class App extends Component {

  state = {
    places: [
      {
        id: 1,
        title: 'Igreja do Salesianos',
        description: 'Igreja católica do Salesianos',
        latitude: -7.210608,
        longitude: -39.321847, 
      },
      {
        id: 2,
        title: 'Cariri Garden',
        description: 'Shopping Center',
        latitude: -7.223421,
        longitude: -39.324573,
      },
      {
        id: 3,
        title: 'Santuário São Francisco das Chagas',
        description: 'Igreja católica dos Franciscanos',
        latitude: -7.211822,
        longitude: -39.313908,
      }
    ],
  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  }

  render() {
    const { latitude, longitude } = this.state.places[0];

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.mapview = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}
          style={styles.mapView}
          showsBuildings={false}
          showsPointsOfInterest={false}
          onMapReady={this._mapReady}
        >
         {this.state.places.map(place => (
            <MapView.Marker
            ref={mark => place.mark = mark}
              key={place.id}
              title={place.title}
              description={place.description}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
            />
         ))}
        </MapView>
        <ScrollView 
          style={styles.placesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={e => {
            const scrolled = e.nativeEvent.contentOffset.x;

            const place = (scrolled > 0)
              ? scrolled / Dimensions.get('window').width
              : 0;

              const { latitude, longitude, mark} = this.state.places[place];

              this.mapview.animateToCoordinate({
                latitude,
                longitude,
              }, 1000);

              setTimeout(() => {
                mark.showCallout();
              }, 1000);
          }}
          >
          {this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
              <Text>{place.title}</Text>
              <Text>{place.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

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
