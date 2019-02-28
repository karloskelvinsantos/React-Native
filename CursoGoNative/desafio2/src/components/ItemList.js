import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

const ItemList = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.containerCard}>
          <Image source={{ uri: props.image }} style={styles.image} />
          <View style={styles.containerCardText}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.description}</Text>
          </View>
          <Icon name="angle-right" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 8,
    marginTop: 15
  },
  containerCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12
  },
  containerCardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 20
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