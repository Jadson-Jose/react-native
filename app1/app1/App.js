
// import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import C1 from './componentes/comp1'

// export default class App1 extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Jadson Silva</Text>
//       </View>
//     );
//   }
// }


export default function App1() {
  return (
    <View style={estilos.container}>
      <C1 />
      <C1 />
      <C1 />
      <C1 />
      <Text style={estilos.txt0}>Jadson jose da Silva</Text>
      <Text style={{ color: '#fff', fontSize: 30 }}>Jadson jose da Silva</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt0: {
    color: '#0f0',
    fontSize: 20,
  }
});