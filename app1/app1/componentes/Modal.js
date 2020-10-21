import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

export default function () {

    const [visivel, setVisivel] = useState(true);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visivel}
                StyleSheet={{}}
            >
                <View style={estilos.modal}>
                    <Text style={estilos.textoModal}>Jadson Jose Silva</Text>
                    <Text style={estilos.textoModal}>Curso de React Native</Text>
                    <Button
                        title="Fechar"
                        onPress={() => { setVisivel(false) }}
                    />

                </View>

            </Modal>

            <Button
                title="Mostrar"
                onPress={() => { setVisivel(true) }}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    modal: {
        backgroundColor: "#000",
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation: 10
    },
    textoModal: {
        color: "#fff"
    }
});