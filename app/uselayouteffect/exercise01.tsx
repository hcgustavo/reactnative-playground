/*
1. Log the Render Order
Goal

Understand when useLayoutEffect runs compared to useEffect.

Requirements

Create a screen with:

useEffect
useLayoutEffect
a Text
a button changing state

Log:

console.log("render")
console.log("layout effect")
console.log("effect")
*/

import { Colors } from "@/constants/theme";
import { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise01() {
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
        console.log('useEffect')
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    }, [])

    console.log('Render component')

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