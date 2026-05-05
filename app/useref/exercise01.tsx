/*
1. Persistent Counter (no re-render)

Create a component with:

A button
A useRef counter

👉 Each press:

increments the ref value
logs it to console

⚠️ Important:
The UI should NOT update when the value changes.

Goal: Understand that useRef.current does not trigger re-renders
*/

import { Colors } from "@/constants/theme";
import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise01() {
    const counter = useRef(0);

    function handleClick() {
        counter.current = counter.current + 1;
        console.log('counter value', counter.current);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{counter.current}</Text>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => handleClick()}>
                    <Text style={style.buttonText}>+</Text>
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
    }
})