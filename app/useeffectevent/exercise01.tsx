/*
1. Interval Logger

Create a screen with:

a counter
a button to increment it

Use:

setInterval
useEffect

Goal:

log the latest counter value every 2 seconds
WITHOUT recreating the interval on every counter change
Requirements
interval created only once
logs always show newest count
use useEffectEvent
*/

import { Colors } from "@/constants/theme";
import { useEffect, useEffectEvent, useState } from "react";
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

    const onCountChange = useEffectEvent(() => {
        console.log('Count: ' + count);
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            onCountChange();
        }, 2000)

        return () => clearInterval(intervalId);
    }, [])

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