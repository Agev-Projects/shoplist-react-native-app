import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#2980B9",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  headerInfo: {
    flexDirection: "row",
  },
  title: {
    color: "white",
    paddingHorizontal: 16,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "400",
  },
});

export default styles;
