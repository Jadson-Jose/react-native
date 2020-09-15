import React from 'react';
import Estilos from './estilos/Estilos';
import Lp from './componentes/ListaPlana';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function App1() {
  return (
    <View style={Estilos.container}>

      <Text style={Estilos.textoPadrao}>Marcia Regina da Silva</Text>
      <Text style={Estilos.textoTitulo}>Jadson jose da Silva</Text>
      <Lp />

    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 350,
    resizeMode: 'contain'
  }
})
