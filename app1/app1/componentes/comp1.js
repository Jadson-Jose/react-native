import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function () {
    return (
        <Text style={estilos.txt2}>Jadson Silva - Programador React </Text>
    )
}


const estilos = StyleSheet.create({
    txt1: {
        color:'#f00',
        fontSize: 20,
    },
    txt2:{
        color:'#00f',
        fontSize:15,
    }
});