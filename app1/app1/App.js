
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
      <C1 curso="React Native" nota="10" cor='#ff0' />
      <C1 curso="C++" nota="10" cor='#f0f' />
      <C1 curso="Javascript" nota="10" cor='#ff0' />
      <C1 curso="C#" nota="10" cor='#000' />
      <Text style={estilos.txt0}>Jadson jose da Silva</Text>
      <Text style={{ color: '#fff', fontSize: 30 }}>Jadson jose da Silva</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt0: {
    // color: '#0f0',
    fontSize: 20,
  }
});