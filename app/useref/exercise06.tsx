/*
6. Fix Stale Closures (very important)

Create:

a counter with useState
a setInterval that logs the count every second

👉 Problem:
It will log stale values

👉 Fix using:

a ref that always holds latest count
*/

import { Colors } from "@/constants/theme";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise06() {
    const [count, setCount] = useState(0);
    const lastCount = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('count: ' + lastCount.current);
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>
            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => {lastCount.current = count + 1; setCount(count + 1)}}>
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
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})