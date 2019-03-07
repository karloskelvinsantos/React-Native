import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

const ItemList = props => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <Image source={{ uri: props.image }} style={styles.image} />
          <View style={styles.containerCardText}>
            <Text numberOfLines={1} style={styles.title}>
              {props.title}
            </Text>
            <Text style={styles.subtitle}>{props.description}</Text>
          </View>
          <Icon name="angle-right" size={30} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10
  },
  containerCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20
  },
  containerCardText: {
    flex: 2,
    flexDirection: "column",
    marginTop: -5,
    marginLeft: 20,
    marginRight: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  subtitle: {
    fontSize: 14
  },
  image: {
    width: 40,
    height: 40
  }
});

export default ItemList;
