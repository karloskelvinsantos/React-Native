import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC"
  },
  containerSearch: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 20,
    marginBottom: 20,
    justifyContent: "space-around"
  },
  inputSearch: {
    flex: 2,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "white"
  },
  buttonSearch: {
    marginTop: 5
  },
  flatListRepositories: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default styles;
