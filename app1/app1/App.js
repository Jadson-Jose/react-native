import React from 'react';
import Estilos from './estilos/Estilos';
import Lp from './componentes/ListaPlana';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
}
  from 'react-native';

const imgbg1 = './assets/img/bg1.jpg';
const imgbg2 = './assets/img/bg2.jpg';
const imgbg3 = './assets/img/bg3.jpg';


export default function App1() {
  return (
    <View style={Estilos.container}>

      <ImageBackground
        source={require(imgbg3)}
        style={estilos.imagemFundo}
      >

        <Text style={Estilos.textoPadrao}>Marcia Regina da Silva</Text>
        <Text style={Estilos.textoTitulo}>Jadson jose da Silva</Text>
        {/* <Lp /> */}

      </ImageBackground>

    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    // width: 350,
    resizeMode: 'contain'
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",


  }
})
