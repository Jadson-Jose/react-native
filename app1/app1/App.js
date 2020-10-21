import React, { useState } from 'react';
import Estilos from './estilos/Estilos.js';
import Modal from './componentes/Modal';


import {
  StyleSheet,
  Text,
  SafeAreaView

} from 'react-native';


export default function App1() {

  const [ligado, setLigado] = useState(false);

  return (
    <SafeAreaView style={Estilos.container}>

      <Text>Marcia Regina da Silva</Text>
      <Text>Jadson jose da Silva</Text>
      <Modal />

    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 350,
    resizeMode: 'contain'
  }

})
