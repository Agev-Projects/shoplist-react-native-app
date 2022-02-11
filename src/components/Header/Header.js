import { Text, View, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "./Header.styles.js";

const Header = ({ list, deleteSelectedItems }) => {
  const count = list.filter((item) => item.isSelected === true).length;

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Lista de Compras</Text>
      {count === 0 ? (
        <Text></Text>
      ) : (
        <View style={styles.headerInfo}>
          <Entypo
            name="trash"
            size={24}
            color="white"
            style={{ marginTop: 6, marginRight: 6 }}
            onPress={() =>
              Alert.alert(
                "AVISO!",
                `Realmente você deseja excluir os itens selecionados?`,
                [
                  {
                    text: "Sim",
                    onPress: () => deleteSelectedItems(),
                  },
                  {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel",
                  },
                ]
              )
            }
          />
          <Text style={styles.title}>{`${count}/${list.length}`}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
