/*
3. Focus a TextInput

Child contains a TextInput.

Expose:

focus()
blur()

👉 Parent has buttons:

"Focus input"
"Blur input"

💡 This is very common in React Native
*/

import { Colors } from "@/constants/theme";
import { useImperativeHandle, useRef } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

export default function Exercise03() {
    const ref = useRef<any>(null);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <MyTextInput ref={ref} />
            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around', marginTop: 15 }}>
                <TouchableOpacity style={style.button} onPress={() => ref.current.focus()}>
                    <Text style={style.buttonText}>Focus input</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => ref.current.blur()}>
                    <Text style={style.buttonText}>Blur input</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

type MyTextInputProps = TextInputProps & {
    ref?: any
}

function MyTextInput({ ref, ...rest }: MyTextInputProps) {
    const myTextInputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => {
        return {
            focus() {
                myTextInputRef?.current?.focus();
            },

            blur() {
                myTextInputRef?.current?.blur();
            }
        }
    })

    return (
        <TextInput {...rest} style={style.textInput} ref={myTextInputRef} />
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 22
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})