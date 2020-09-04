import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
// import C1 from '../app1/componentes/comp1';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos';



// function fexibir(vp1) {
//   if (vp1) {
//     return (<Text>Curso de React Native</Text>)
//   } else {
//     return (<Text>Sem curso</Text>)
//   }
// }



export default function App1() {
  let vexibir = true;
  return (

    <View style={Estilos.container}>
      <Image
        source={require('./assets/tema-red-bull.jpg')}
        style={estilos.logo}
      />


      <Caixas exibir={vexibir} />
      <Text style={Estilos.textoPadrao}>Jadson jose da Silva</Text>
      <Text style={Estilos.textoTitulo}>Jadson jose da Silva</Text>
      {vexibir ? <Text>Curso React</Text> : <Text>Não curso</Text>}
      {vexibir && <Text>Curso React2</Text>}
    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 350,
    resizeMode: 'contain'
  }
})
