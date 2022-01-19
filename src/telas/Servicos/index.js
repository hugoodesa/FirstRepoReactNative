import React from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import Item from "../../Item";

const servicos = [
  { id: 1, nome: "banho", preco: 79.9, descricao: "Banho no gato" },
  { id: 2, nome: "vacina v4", preco: 89.9, descricao: "Dose vacina v4" },
  {
    id: 3,
    nome: "Vacina anti rábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirábica",
  },
];

const Servicos = () => (
  <SafeAreaView>
    <Text>Serviços</Text>
    <FlatList
      data={servicos}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ id }) => String(id)}
    />
  </SafeAreaView>
);

export default Servicos;
