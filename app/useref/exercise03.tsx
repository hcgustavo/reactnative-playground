/*
3. Focus a TextInput Programmatically

Use a TextInput and a button.

👉 When pressing the button:

focus the input using useRef

💡 Use:

inputRef.current?.focus()
*/

import { Colors } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import { useRef } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Exercise03() {
    const theme = useTheme();
    const textInputRef = useRef<TextInput>(null);

    function handleClick() {
        textInputRef?.current?.focus();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput
            ref={textInputRef}
            style={[style.textInput, { color: theme.colors.text }]}
            />

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => handleClick()}>
                    <Text style={style.buttonText}>Focus</Text>
                </TouchableOpacity>
            </View>
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