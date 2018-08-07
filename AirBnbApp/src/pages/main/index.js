import React, { Component } from 'react';

import { StatusBar } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { Container, AnnotationContainer, AnnotationText } from './styles';

import api from '../../services/api';

MapboxGL.setAccessToken('pk.eyJ1Ijoia2FybG9za2VsdmluIiwiYSI6ImNqaXc3ZWw3NjF1NTAzcm8zdTN0M2Fqb3oifQ.XS64D6yjdmJRl1rTnHplPg');

export default class Main extends Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    locations: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('/properties', {
        params: {
          latitude: -7.213801, 
          longitude: -39.328920,
        },
      });

      this.setState({ locations: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  renderLocations = () => (
    this.state.locations.map(location => (
      <MapboxGL.PointAnnotation
        id={location.id.toString()}
        coordinate={[parseFloat(location.longitude), parseFloat(location.latitude)]}
      >
        <AnnotationContainer>
          <AnnotationText>{location.price}</AnnotationText>
        </AnnotationContainer>
        <MapboxGL.Callout title={locaton.title}/>
      </MapboxGL.PointAnnotation>
    ))
  );
  
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content"/>
        <MapboxGL.MapView
          centerCoordinate={[-7.213801, -39.328920]}
          style={{ flex: 1}}
          styleURL={MapboxGL.StyleURL.Dark}
        >
         { this.renderLocations() }
        </MapboxGL.MapView>
      </Container>
    )
  }
}