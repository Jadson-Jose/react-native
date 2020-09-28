import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function (props) {
    return (
        <View>
            <Text>Carro: {props.nome}- Ligado: {ligado ? "Sim" : "Não"}</Text>
            <Button
                title={ligado ? "Desligar" : "ligar"}
                onPress={
                    () => { this.setState({ ligado: !this.state.ligado }) }
                }
            />
        </View>
    )
}