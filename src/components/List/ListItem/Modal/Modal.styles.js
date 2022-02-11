import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 5,
    borderColor: "#2980B9",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    height: 500,
  },
  input: {
    backgroundColor: "white",
    width: "98%",
    height: "20%",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#2980B9",
  },
  button: {
    width: "100%",
    paddingTop: 15,
    marginBottom: 10,
  },
});

export default styles;
