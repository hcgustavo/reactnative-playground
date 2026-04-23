/*
4. Character Counter
TextInput with max 100 chars
Show:
45 / 100
Turn text red when limit exceeded

👉 Focus:
Derived UI from state
*/

import { Colors } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercise04() {
    const [text, setText] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
            <TextInput
            style={style.textInput}
            onChangeText={setText}
            autoFocus
            />
            <Text style={{ fontSize: 18, color: text.length <= 100 ? 'blue' : 'red' }}>{text.length + '/100'}</Text>
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