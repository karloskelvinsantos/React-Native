import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "~/components/ItemList/styles";
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

export default ItemList;
