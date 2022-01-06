import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  Input,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState, useLayoutEffect } from 'react';

const Form = ({ navigation }) => {
  const [usuario, setLogin] = useState();
  const [senha, setSenha] = useState();

  function navegarHome() {
    navigation.navigate('Index');
  }

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.index}>LIVRARIA</Text>

        <Text style={styles.login}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu usuário"
          onChangeText={(text) => setLogin(text)}
        />

        <Text style={styles.login}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe sua senha"
          onChangeText={(text) => setSenha(text)}
        />
      </>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Index')}
      >
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  index: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  container: {
    paddingVertical: 70,
    paddingHorizontal: 10,
    backgroundColor: '#836FFF',
    flex: 1,
  },

  input: {
    backgroundColor: 'white',
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },

  botaoTexto: {
    color: '#191970',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botao: {
    position: 'absolute',
    bottom: 100,
    padding: 16,
    width: 100,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});
