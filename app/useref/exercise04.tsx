/*
4. Prevent Multiple Rapid Clicks (debounce-like)

Create a button that:

should only work once every 2 seconds

👉 Use a ref to:

store last click timestamp

Goal: Avoid re-renders while controlling behavior
*/

import { Colors } from "@/constants/theme";
import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise04() {
    const lastClickTimestamp = useRef(0);

    function handleClick() {
        lastClickTimestamp.current = Date.now();
        console.log('Button clicked ' + lastClickTimestamp.current)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => {
                    if(Date.now() - lastClickTimestamp.current >= 2000) {
                        handleClick();
                    }
                }}>
                    <Text style={style.buttonText}>Click</Text>
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