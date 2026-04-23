/*
9. Debounced Input (simulate scanner typing 🧠)
TextInput receives fast input
Detect when user "finished typing"

👉 Hint:
Use setTimeout + state

👉 Focus:
State + timing
Real-world scanning behavior
*/

import { Colors } from "@/constants/theme";
import { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercise09() {
    const [text, setText] = useState('');
    const timeoutId = useRef<number | undefined>(undefined);

    return (
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
            <TextInput
            style={style.textInput}
            onChangeText={(text) => {
                clearTimeout(timeoutId.current);
                const id = setTimeout(() => {setText(text)}, 500);
                timeoutId.current = id;
            }}
            />
            <Text style={{ fontSize: 16, color: 'blue', marginTop: 15 }}>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        width: 75,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 12
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})