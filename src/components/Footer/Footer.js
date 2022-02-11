import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import styles from "./Footer.styles.js";

const Footer = ({ addItem }) => {
  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    setText(value);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.footer}>
      <TextInput
        placeholder="Novo item da lista"
        style={styles.input}
        onChangeText={handleTextChange}
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
    </KeyboardAvoidingView>
  );
};

export default Footer;
