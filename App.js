import { useState, useEffect } from "react";
import { View, BackHandler, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

import Header from "./src/components/Header/Header.js";
import Footer from "./src/components/Footer/Footer.js";
import List from "./src/components/List/List.js";

const App = () => {
  const [list, setList] = useState([]);

  //armazena a lista de itens no storage do fone para persistência dos dados
  const saveDataList = async (value) => {
    try {
      const jsonList = JSON.stringify(value);
      await AsyncStorage.setItem("@MyList", jsonList);
    } catch (e) {
      alert(e);
    }
  };

  //lê os dados armazenados no storage
  const getDataList = async () => {
    try {
      const jsonList = await AsyncStorage.getItem("@MyList");
      jsonList != null ? setList(JSON.parse(jsonList)) : null;
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getDataList();

    //confirma saida do App
    const closeApp = () => {
      Alert.alert("AVISO!", "Realmente você deseja fechar o App?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      closeApp
    );

    return () => backHandler.remove();
  }, []);

  const addItem = (text) => {
    setList((previousList) => {
      const add = [
        { text: text, isSelected: false, key: uuidv4() },
        ...previousList,
      ];
      saveDataList(add);
      return add;
    });
  };

  const selectItem = (key, value) => {
    setList((previousList) => {
      for (const item of previousList) {
        if (item.key === key) {
          item.isSelected = value;
          const select = [...previousList];
          saveDataList(select);
          return select;
        }
      }
    });
  };

  const deleteSelectedItems = () => {
    setList((previousList) => {
      const deleteSelectedItems = previousList.filter(
        (item) => item.isSelected != true
      );
      saveDataList(deleteSelectedItems);
      return deleteSelectedItems;
    });
  };

  const editItem = (key, value) => {
    setList((previousList) => {
      for (const item of previousList) {
        if (item.key === key) {
          item.text = value;
          const edit = [...previousList];
          saveDataList(edit);
          return edit;
        }
      }
    });
  };

  const deleteItem = (key) => {
    setList((previousList) => {
      const deleteItem = previousList.filter((item) => item.key != key);
      saveDataList(deleteItem);
      return deleteItem;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header list={list} deleteSelectedItems={deleteSelectedItems} />
      <List
        list={list}
        deleteItem={deleteItem}
        selectItem={selectItem}
        editItem={editItem}
      />
      <Footer addItem={addItem} />
    </View>
  );
};

export default App;
