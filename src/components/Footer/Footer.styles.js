import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2980B9",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    height: "60%",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderColor: "#6E6E6E",
  },
  button: {
    backgroundColor: "white",
    marginRight: 5,
    width: "15%",
    height: "62%",
    borderRadius: 5,
  },
  buttonText: {
    color: "#2980B9",
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: "bold",
  },
});

export default styles;
