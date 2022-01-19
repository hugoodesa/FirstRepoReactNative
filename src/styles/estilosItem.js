import { StyleSheet } from "react-native";
import { cores } from "../styles/estilosGlobal";

export default StyleSheet.create({
  informacao: {
    padding: 24,
    borderBottomWidth: 2,
    borderColor: "grey",
    marginHorizontal: 7,
  },
  nome: {
    color: cores.laranja,
    fontWeight: "bold",
    fontSize: 16,
  },
  calculo: {
    color: cores.escuro,
    fontSize: 14,
    marginVertical: 8,
  },
  preco: {
    color: cores.roxo,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza,
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  valor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  descricao: {
    color: cores.escuro,
    fontSize: 16,
    marginRight: 8,
  },
  quantidade: {
    width: 42,
  },
  inputTextStyle: {
    flex: 1,
    flexDirection: "row",
  },
  total: {
    flex: 1,
    justifyContent: "flex-start",
    color: "tomato",
  },
  inputQtd: {
    width: 42,
    borderColor: "grey",
    borderWidth: 2,
    textAlign: "center",
  },
  styleTest: {
    color: "darkblue",
  },
});
