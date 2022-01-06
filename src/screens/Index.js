import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Catalogo from './components/Catalogo';

const Index = ({ navigation }) => {
  function navegarHome() {
    navigation.navigate('Livros');
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.clique}
        onPress={() => navigation.navigate('Livros')}
      >
        <Text style={styles.botaoTexto}>Livros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.clique}
        onPress={() => navigation.navigate('Livros')}
      >
        <Text style={styles.botaoTexto}>Categorias</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  clique: {
    marginVertical: 20,
    backgroundColor: '#FFDEAD',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#191970',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
