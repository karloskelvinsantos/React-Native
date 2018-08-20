import './config/ReactotronConfig';
import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  async componentDidMount() {
    const currentYear = new Date().getFullYear();
    const url = "https://api.themoviedb.org/3/discover/movie" +
      `?primary_release_year=${currentYear}` +
      "&page=1" +
      "&include_video=false" +
      "&include_adult=false" +
      "&sort_by=popularity.desc" +
      "&language=pt-BR" +
      "&api_key=0fb146bada56315435ff4e5df46205c5";

    const movieCall = await fetch(url);
    const response = await movieCall.json();

    console.tron.log(response);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Filmes do Ano</Text>
        </View>
        <FlatList
          data={[
            { id: '1', title: 'Filme 1'},
            { id: '2', title: 'Filme 2'},
            { id: '3', title: 'Filme 3'},
            { id: '4', title: 'Filme 4'},
          ]}
          renderItem={(info) => <Text>{info.item.title}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: "#eee",
    paddingHorizontal: 6,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",

  }
});
