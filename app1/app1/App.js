import React from 'react';
import Estilos from './estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
  StyleSheet,
  Text,
  Button,
  View

} from 'react-native';

const Guias = createBottomTabNavigator();

function TelaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Home</Text>
      <Text>Jadson Jose</Text>

    </View>
  );
}

function TelaCanal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Canal</Text>
      <Text>Marcia Regina</Text>

    </View>
  );
}

function TelaCursos({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Cursos</Text>
      <Button
        title="React Native"
        onPress={() => navigation.navigate('CursoReactNative', {
          aulas: 100, autor: 'Jadson'
        })}
      />
    </View>
  );
}


export default function App1() {
  return (
    <NavigationContainer>
      <Guias.Navigator initialRouteName="TelaHome">
        <Guias.Screen
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
        <Guias.Screen
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
        <Guias.Screen
          name="Cursos"
          component={TelaCursos}
          options={{ title: 'Cursos do Canal' }}
        />

      </Guias.Navigator>
    </NavigationContainer>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 350,
    resizeMode: 'contain'
  }

})
