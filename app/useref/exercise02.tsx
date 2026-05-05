/*
2. Track Previous State Value

Create:

count with useState
prevCount with useRef

👉 On each update:

store previous value in the ref
display both current and previous count

Expected behavior:

Current: 5
Previous: 4
*/

import { Colors } from "@/constants/theme";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise02() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(0);

    function handleClick() {
        prevCount.current = count;
        setCount(count + 1);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{'Current: ' + count}</Text>
            <Text style={{ fontSize: 42, color: 'blue' }}>{'Previous: ' + prevCount.current}</Text>

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