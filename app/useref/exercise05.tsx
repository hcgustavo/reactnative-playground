/*
5. Store Interval ID Without Re-render

Create:

Start button → starts a timer (setInterval)
Stop button → clears it

👉 Store interval ID inside a ref

⚠️ Don’t use state for this.
*/

import { Colors } from "@/constants/theme";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise05() {
    const [count, setCount] = useState(0);
    const intervalId = useRef<number>(null);

    function handleStart() {
        const id = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
        intervalId.current = id;
    }

    function handleStop() {
        if(intervalId.current) {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>

            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={handleStart}>
                    <Text style={style.buttonText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={handleStop}>
                    <Text style={style.buttonText}>Stop</Text>
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