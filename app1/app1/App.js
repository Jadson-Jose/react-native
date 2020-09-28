import React, { useState } from 'react';
import Estilos from './estilos/Estilos.js';
import CarraC from './componentes/Carroc';

import {
  StyleSheet,
  View,
  Text,
  Button

} from 'react-native';


export default function App1() {

  const [ligado, setLigado] = useState(false);

  return (
    <View style={Estilos.container}>

          <Text>Marcia Regina da Silva</Text>
          <Text>Jadson jose da Silva</Text>
          <CarraC nome="Golf"/>

    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 350,
    resizeMode: 'contain'
  }

})
