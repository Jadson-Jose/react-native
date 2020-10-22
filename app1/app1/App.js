import React, { useState } from 'react';
import Estilos from './estilos/Estilos.js';



import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Button

} from 'react-native';


export default function App1() {

  const [cor, setCor] = useState("black");

  return (
    <SafeAreaView style={Estilos.container}>
      <StatusBar
        backgroundColor={cor}
        barStyle="dafault"
        hidden={false}
      />
      <Text>Marcia Regina da Silva</Text>
      <Text>Jadson jose da Silva</Text>

      <Button
        title="Vermelho"
        onPress={() => { setCor("red") }}

      />

      <Button
        title="Azul"
        onPress={() => { setCor("blue") }}
      />

      <Button
        title="Verde"
        onPress={() => { setCor("green") }}
      />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 350,
    resizeMode: 'contain'
  }

})
