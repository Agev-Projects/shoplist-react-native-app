import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { Audio } from "expo-av";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";

import styles from "./ListItem.styles.js";
import ModalItem from "./Modal/Modal.js";

const ListItem = ({ item, deleteItem, selectItem, editItem }) => {
  const [modal, setModal] = useState(false);
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/sounds/selected.wav")
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View
      style={item.isSelected ? styles.containerIsSelected : styles.container}
    >
      {modal && (
        <ModalItem item={item} editItem={editItem} closeModal={setModal} />
      )}
      <View style={styles.content}>
        <BouncyCheckbox
          size={25}
          iconStyle={{
            borderRadius: 3,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
          fillColor="#3FAF47"
          unfillColor="#FFFFFF"
          isChecked={item.isSelected}
          onPress={(isChecked) => {
            playSound();
            selectItem(item.key, isChecked);
          }}
        />
        <View style={styles.textContainer}>
          <Text style={item.isSelected ? styles.textIsSelected : styles.text}>
            {item.text}
          </Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={{ marginRight: 50 }}
          onPress={() => setModal(!modal)}
        >
          <AntDesign name="edit" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "AVISO!",
              `Realmente você deseja excluir "${item.text}"?`,
              [
                {
                  text: "Sim",
                  onPress: () => deleteItem(item.key),
                },
                {
                  text: "Não",
                  onPress: () => null,
                  style: "cancel",
                },
              ]
            );
          }}
        >
          <AntDesign name="closecircle" size={20} color="#FF8888" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;
