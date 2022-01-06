import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Modal,
  Pressable,
} from 'react-native';

const Catalogo = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [foto, setFoto] = useState();
  const [titulo, setTitulo] = useState();
  const [valor, setValor] = useState();
  const [autor, setAutor] = useState();
  const [npaginas, setNpaginas] = useState();

  const livros = [
    {
      id: 1,
      titulo: 'Depois daquela viagem',
      autor: 'Valéria Piassa Polizzi',
      npaginas: '288',
      valor: '25.00',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/41zJfoJIMUL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
    },
    {
      id: 2,
      titulo: 'A hora da estrela',
      autor: 'Clarice Lispector',
      npaginas: '88',
      valor: '30.00',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/41Laz2CTpWL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
    },
    {
      id: 3,
      titulo:
        'Ansiedade 2: Autocontrole. Como Controlar o Estresse e Manter o Equilíbrio',
      autor: 'Augusto Cury ',
      npaginas: '154',
      valor: '32.00',
      foto: 'https://m.media-amazon.com/images/I/51P0QN7ESgL.jpg',
    },
    {
      id: 4,
      titulo:
        'As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético',
      autor: 'Haemin Sunim',
      npaginas: '256',
      valor: '28.00',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/51O1lPY6kUL._SX363_BO1,204,203,200_.jpg',
    },
    {
      id: 5,
      titulo: 'Jimmy Corrigan - o menino mais esperto do mundo',
      autor: ' Chris Ware (Autor), Daniel Galera (Tradutor)',
      npaginas: '388',
      valor: '59.90',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/51j0ahpuU+L._SY410_BO1,204,203,200_.jpg',
    },
  ];

  function abrir(pass) {
    console.log(pass);
    setModalVisible(false);
    setFoto(pass.foto);
    setTitulo(pass.titulo);
    setValor(pass.valor);
    setAutor(pass.autor);
    setNpaginas(pass.npaginas);
  }
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.divisor} />}
        data={livros}
        renderItem={({ item }) => {
          return (
            <>
              <Text>{item.titulo}</Text>
              <Image style={styles.foto} source={{ uri: item.foto }} />
              <Text style={styles.modalText}>Valor:{item.valor}</Text>
              <Text style={styles.modalText}>Autor:{item.autor}</Text>
              <Text style={styles.modalText}>Número de páginas:{item.npaginas}</Text>
              

              <Pressable
                style={[styles.botao, styles.botaoAbrir]}
                onPress={() => abrir(item)}
              >
                <Text>Visualizar</Text>
              </Pressable>
            </>
          );
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
      </Modal>
    </View>
  );
};

export default Catalogo;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flex: 1,
  },

  foto: {
    width: '10%',
    height: 200,
  },

  divisor: {
    width: 20,
  },

  header: {
    fontSize: 35,
    color: 'white',
    marginHorizontal: 5,
    marginVertical: 18,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23,
  },
  modalView: {
    margin: 22,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  botao: {
    borderRadius: 22,
    padding: 10,
    elevation: 2,
  },
  botaoAbrir: {
    backgroundColor: '#800000',
    width: '10%',
    textAlign: 'center',
  },
  botaoFechar: {
    color: 'blue',
  },
  textStyle: {
    color: 'Blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
});
