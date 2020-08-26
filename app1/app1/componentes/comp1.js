import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Estilos from '../estilos/Estilos.js'



export default function (props) {

    return (
        <Text style={Estilos.textoCursos}>Jadson - Curso de {props.curso}: Nota={props.nota}</Text>
    )
}


