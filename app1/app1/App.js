import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import C1 from '../app1/componentes/comp1';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos';



function fexibir(vp1){
  if(vp1){
    return(<Text>Curso de React Native</Text>)
  }else{
    return(<Text>Sem curso</Text>)
  }
}



export default function App1() {
  return (
    <View style={Estilos.container}>
      {/* <C1 curso="React Native" nota="10" />
      <C1 curso="C++" nota="10" />
      <C1 curso="Javascript" nota="10" />
      <C1 curso="C#" nota="10" /> */}

      <Caixas />
      <Text style={Estilos.textoPadrao}>Jadson jose da Silva</Text>
      <Text style={Estilos.textoTitulo}>Jadson jose da Silva</Text>
      {fexibir(true)}
    </View>
  );
};
