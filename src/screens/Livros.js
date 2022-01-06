import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Catalogo from './components/Catalogo';

const Livros = ({ navigation }) => {
  return (
    <View>
      <Catalogo />
    </View>
  );
};
export default Livros;

const styles = StyleSheet.create({});
