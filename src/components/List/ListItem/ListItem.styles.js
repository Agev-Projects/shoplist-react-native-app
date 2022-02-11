import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#eee",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  text: {
    color: "#6E6E6E",
    fontSize: 16,
    marginRight: 15,
    marginVertical: 15,
  },
  containerIsSelected: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#DCFFDE",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#eee",
  },
  textIsSelected: {
    color: "#3FAF47",
    textDecorationLine: "line-through",
    fontSize: 16,
    marginRight: 15,
    marginVertical: 15,
  },
});

export default styles;
