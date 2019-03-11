import { StyleSheet } from "react-native";

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

export default styles;
