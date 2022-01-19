import React from "react";
import { TouchableOpacity, Text } from "react-native";
import estilos from "../styles/estilosItem";

const StyledButton = ({ value, action }) => {
  return (
    <TouchableOpacity onPress={action} style={estilos.botao}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
