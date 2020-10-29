import React from 'react';
import Estilos from './estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaCanal from './componentes/TelaCanal';


import {
  StyleSheet,
  Text,
  Button,
  View

} from 'react-native';

const Gavetas = createDrawerNavigator();

function TelaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Home</Text>
      <Text>Jadson Jose</Text>

    </View>
  );
}



function TelaCursos({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Cursos</Text>

    </View>
  );
}


export default function App1() {
  return (
    <NavigationContainer>
      <Gavetas.Navigator initialRouteName="TelaHome">
        <Gavetas.Screen
          name="Home"
          component={TelaHome}
          options={{
            title: "Tela Inicial",
            headerStyle: {
              backgroundColor: '#008'
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Button
                title="Cursos"
                color="#000"
                onPress={() => alert('Botão Cursos Clicado')}

              />
            )

          }}
        />
        <Gavetas.Screen
          name="Canal"
          component={TelaCanal}
          options={{
            title: 'Tela Canal',
            headerStyle: {
              backgroundColor: '#008'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Gavetas.Screen
          name="Cursos"
          component={TelaCursos}
          options={{ title: 'Cursos do Canal' }}
        />

      </Gavetas.Navigator>
    </NavigationContainer>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 350,
    resizeMode: 'contain'
  }

})
