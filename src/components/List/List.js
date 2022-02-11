import { Text, View, FlatList } from "react-native";

import styles from "./List.styles.js";
import ListItem from "./ListItem/ListItem.js";

const List = ({ list, deleteItem, selectItem, editItem }) => {
  return (
    <View style={styles.container}>
      {list.length === 0 ? (
        <Text style={styles.title}>Nenhum item na lista</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={list}
          extraData={list}
          renderItem={({ item }) => {
            return (
              <ListItem
                item={item}
                deleteItem={deleteItem}
                selectItem={selectItem}
                editItem={editItem}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default List;
