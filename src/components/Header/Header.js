import { Text, View } from "react-native";

import styles from "./Header.styles.js";

const Header = ({ list }) => {
  const count = list.filter((item) => item.isSelected === true).length;

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Lista de Compras</Text>
      {count === 0 ? (
        <Text></Text>
      ) : (
        <Text style={styles.title}>{`${count}/${list.length}`}</Text>
      )}
    </View>
  );
};

export default Header;
