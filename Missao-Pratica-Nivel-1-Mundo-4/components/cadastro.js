import * as ImagePicker from "expo-image-picker";
import React, { Component } from "react";
import { Alert, Image, StyleSheet, TextInput, View } from "react-native";
import CustomButton from "./botao";

class CadastroFornecedor extends Component {
  state = {
    nome: "",
    endereco: "",
    contato: "",
    categorias: "",
    imagem: null,
  };

  handleCadastro = () => {
    const { nome, endereco, contato, categorias, imagem } = this.state;
    if (!nome || !endereco || !contato || !categorias) {
      this.showAlert("Erro", "Por favor, preencher todos os campos.");
      return;
    }

    const novoFornecedor = { nome, endereco, contato, categorias, imagem };
    this.props.onCadastroSubmit(novoFornecedor);
    this.clearFields();
    this.showAlert("Sucesso", "Fornecedor cadastrado com sucesso!");
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 2,
    });

    if (!result.canceled) {
      this.setState({
        imagem:
          result.assets && result.assets.length > 0
            ? result.assets[0].uri
            : null,
      });
    }
  };

  clearFields = () => {
    this.setState({
      nome: "",
      endereco: "",
      contato: "",
      categorias: "",
      imagem: null,
    });
  };

  showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  render() {
    const { nome, endereco, contato, categorias, imagem } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nome}
          onChangeText={(text) => this.setState({ nome: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={(text) => this.setState({ endereco: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Contato"
          value={contato}
          onChangeText={(text) => this.setState({ contato: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria/Produto"
          value={categorias}
          onChangeText={(text) => this.setState({ categorias: text })}
        />

        {imagem && <Image source={{ uri: imagem }} style={styles.image} />}

        <View style={styles.buttonContainer}>
          <CustomButton title="Escolher Imagem" onPress={this.pickImage} />
          <CustomButton
            title="Cadastrar"
            color="#4169e1"
            onPress={this.handleCadastro}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    width: 320,
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 13,
    paddingVertical: 9,
    backgroundColor: "#7f7f7f",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 25,
  },
  image: {
    width: 162,
    height: 162,
    marginTop: 14,
    borderRadius: 200,
    marginBottom: 14,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: 320,
  },
});

export default CadastroFornecedor;
