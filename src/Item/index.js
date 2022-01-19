import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import InputText from "../InputText";
import estilo from "../styles/estilosItem";
import StyledButton from "../Button";

const Item = ({ nome, preco, descricao }) => {
  const [qtd, setQtd] = useState(1);

  return (
    <View style={estilo.informacao}>
      <Text style={estilo.nome}>{nome}</Text>
      <Text style={estilo.preco}>{preco}</Text>
      <Text style={estilo.descricao}>{descricao}</Text>
      <InputText qtd={qtd} setter={setQtd} />
      <Text style={estilo.total}>Valor Total R$ : 0</Text>
      <StyledButton value={"Add to Chart"} action={() => {}} />
    </View>
  );
};

export default Item;
