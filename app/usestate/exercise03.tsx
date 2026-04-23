/*
3. TextInput Mirror
Create a <TextInput>
Display the typed text live below

👉 Focus:
Controlled components
onChangeText
*/

import { Colors } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercise03() {
    const [text, setText] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
            <TextInput
            style={style.textInput}
            onChangeText={setText}
            autoFocus
            />
            <Text style={{ fontSize: 42, color: 'blue' }}>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        width: 75,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 24
    },
    
    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})