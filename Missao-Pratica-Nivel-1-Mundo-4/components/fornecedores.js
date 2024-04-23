import React, { useMemo, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const useFiltrarFornecedores = (fornecedores, categoriaFiltro) => {
  const fornecedoresFiltrados = useMemo(
    () =>
      fornecedores.filter(
        (fornecedor) =>
          categoriaFiltro === "" ||
          fornecedor.categorias.includes(categoriaFiltro)
      ),
    [fornecedores, categoriaFiltro]
  );
  return fornecedoresFiltrados;
};

const ListaFornecedores = ({ fornecedores, onRemove }) => {
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const fornecedoresFiltrados = useFiltrarFornecedores(
    fornecedores,
    categoriaFiltro
  );

  const handleCategoriaFiltroChange = (text) => {
    setCategoriaFiltro(text);
  };

  const handleDelete = (fornecedor) => {
    Alert.alert(
      "Confirmar exclusão",
      "Você realmente deseja excluir este fornecedor?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: () => onRemove(fornecedor.id) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar por Categoria"
        value={categoriaFiltro}
        onChangeText={handleCategoriaFiltroChange}
      />

      {fornecedoresFiltrados.map((fornecedor, index) => (
        <View key={index} style={styles.fornecedorContainer}>
          <Image
            source={{ uri: fornecedor.imagem }}
            style={styles.imagemFornecedor}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.nomeFornecedor}>{fornecedor.nome}</Text>
            <Text style={styles.detalheFornecedor}>
              Endereço: {fornecedor.endereco}
            </Text>
            <Text style={styles.detalheFornecedor}>
              Contato: {fornecedor.contato}
            </Text>
            <Text style={styles.detalheFornecedor}>
              Categoria: {fornecedor.categorias}
            </Text>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleDelete(fornecedor)}
            >
              <Text style={styles.actionText}>Apagar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
    backgroundColor: "#c05cf3",
  },
  input: {
    fontSize: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#f5fffa",
    borderRadius: 10,
    backgroundColor: "#f5fffa",
  },
  fornecedorContainer: {
    flexDirection: "row-reverse",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f5fffa",
    borderWidth: 2,
    borderColor: "#d3d3d3",
    borderRadius: 25,
    shadowColor: "#0c0c0c",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: "center",
  },
  infoContainer: {
    flex: 2,
    marginLeft: 10,
  },
  nomeFornecedor: {
    fontSize: 16,
    fontWeight: "bolder",
    color: "#404040",
  },
  detalheFornecedor: {
    fontSize: 16,
    color: "#999999",
  },
  imagemFornecedor: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  actionButton: {
    padding: 9,
    width: 75,
    marginTop: 9,
    backgroundColor: "#c0c0c0",
    borderRadius: 30,
  },
  actionText: {
    color: "#292929",
  },
});

export default ListaFornecedores;