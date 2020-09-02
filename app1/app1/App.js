import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import C1 from '../app1/componentes/comp1';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos';



function fexibir(vp1) {
  if (vp1) {
    return (<Text>Curso de React Native</Text>)
  } else {
    return (<Text>Sem curso</Text>)
  }
}



export default function App1() {
  let vexibir = false;
  return (
    <View style={Estilos.container}>
      <Caixas />
      <Text style={Estilos.textoPadrao}>Jadson jose da Silva</Text>
      <Text style={Estilos.textoTitulo}>Jadson jose da Silva</Text>
      {fexibir(true)}

      {vexibir ? <Text>Curso React</Text> : <Text>Não curso</Text>}
    </View>
  );
};
