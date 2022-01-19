import React from "react";
import { TextInput, Text, View } from "react-native";
import estilo from "../styles/estilosItem";

const InputText = ({ qtd, setter }) => {
  const intToString = String(qtd);

  return (
    <View style={estilo.inputTextStyle}>
      <Text>QTD : </Text>
      <TextInput
        style={[estilo.inputQtd, estilo.styleTest]}
        value={intToString}
        keyboardType="numeric"
        onChangeText={(value) => setter(value)}
      />
    </View>
  );
};

export default InputText;
