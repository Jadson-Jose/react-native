import React from 'react';
import {
StyleSheet,
View,
Text,
Image,
Button,
Alert
} from 'react-native';
// import C1 from '../app1/componentes/comp1';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos';


function msg(){
  Alert.alert('MSG', 'Curso de React Native')
}

export default function App1() {
  let vexibir = true;
  return (

    <View style={Estilos.container}>

      <Button 
        title="Mostrar mensagem"
        onPress={msg}
      />

      <Image
        source={require('./assets/img/tema-red-bull2.jpg')}
        style={estilos.logo}
      />



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
