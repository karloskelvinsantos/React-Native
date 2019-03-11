import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#DCDCDC"
  },
  viewButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#C0C0C0",
    borderRadius: 5
  },
  containerButtons: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  flatListIssues: {
    marginTop: 20
  }
});

export default styles;
