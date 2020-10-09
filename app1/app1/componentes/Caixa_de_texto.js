import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

export default function () {

    const [nome, setNome] = useState("Jadson")
    const mudarNome = () => { }
    return (
        <View>
            <Text>Digite o seu nome:</Text>
            <TextInput
                style={{ borderWidth: 1, borderEndColor: '#000' }}
                value={nome}
                onChangeText={text => setNome(text)}
                autoCapitalize="none"
            />
            <Text>Valor Digitado: {nome}</Text>
        </View>
    )
}
