import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import styles from "./Footer.styles.js";

const Footer = ({ addItem }) => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <View style={styles.footer}>
      <TextInput
        placeholder="Novo item da lista"
        style={styles.input}
        onChangeText={handleChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addItem(text);
          setText("");
        }}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
