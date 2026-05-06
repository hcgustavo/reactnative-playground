/*
2. Run on State Change

Create a counter with a button. Every time the count changes, log:

Count changed: X

👉 Goal:

Understand dependency array behavior
*/

import { Colors } from "@/constants/theme";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise02() {
    const [count, setCount] = useState(0);

    function handleClick(type: 'increment' | 'decrement') {
        if(type === 'increment') {
            setCount(count + 1);
        }
        else {
            if(count > 0) {
                setCount(count - 1);
            }
        }
    }

    useEffect(() => {
        console.log('Count changed: ' + count);
    }, [count])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => handleClick('increment')}>
                    <Text style={style.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => handleClick('decrement')}>
                    <Text style={style.buttonText}>-</Text>
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