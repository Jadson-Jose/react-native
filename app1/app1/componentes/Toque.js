import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function () {

    const [cont, setCont] = useState(0);

    const contar = () => {
        setCont(cont + 1);
    }

    return (
        <View>
            <TouchableHighlight
                style={estilos.botao}
                onPress={contar}

            >


                <Text>CFB cursos</Text>
            </TouchableHighlight>

            <TouchableOpacity
                style={estilos.botao}
                onPress={contar}

            >


                <Text>CFB cursos</Text>
            </TouchableOpacity>
            

            <TouchableWithoutFeedback
                style={estilos.botao}
                onPress={contar}

            >


                <Text>CFB cursos</Text>
            </TouchableWithoutFeedback>
            
            
            <Text>{cont}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    botao: {
        alignItems: 'center',
        backgroundColor: '#ccc',
        padding: 10
    }
});