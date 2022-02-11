import { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";

import styles from "./Modal.styles.js";

const ModalItem = ({ item, editItem, closeModal }) => {
  const [text, setText] = useState(item.text);

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <Modal
      style={styles.container}
      transparent={true}
      onRequestClose={() => closeModal(false)}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={text}
        />
        <View style={styles.button}>
          <Button
            title="Editar item"
            color="#2980B9"
            onPress={() => {
              editItem(item.key, text);
              closeModal(false);
            }}
          />
          <View style={styles.button}>
            <Button
              title="Cancelar"
              color="#FF8888"
              onPress={() => closeModal(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalItem;
