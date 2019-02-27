import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

const ItemList = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <Image source={{ uri: props.image }} style={styles.imageRepository} />
        <View style={styles.containerCardText}>
          <Text style={styles.titleRepository}>{props.title}</Text>
          <Text style={styles.subtitleRepository}>{props.subtitle}</Text>
        </View>
        <Icon name="angle-right" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10
  },
  containerCard: {
    flexDirection: "row",
    padding: 12
  },
  containerCardText: {
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 150
  },
  titleRepository: {
    fontSize: 18
  },
  subtitleRepository: {
    fontSize: 14
  },
  imageRepository: {
    width: 40,
    height: 40
  }
});

export default ItemList;
