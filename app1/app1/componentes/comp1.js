import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

let cor;

export default function (props) {

    cor = props.cor

    return (
        <Text style={estilos.txt2, { color: cor }}>Jadson - Curso de {props.curso}: Nota={props.nota} </Text>
    )
}


const estilos = StyleSheet.create({
    txt1: {
        // color: '#f00',
        fontSize: 20,
    },
    txt2: {
        // color: '#00f',
        fontSize: 15,
    }
});