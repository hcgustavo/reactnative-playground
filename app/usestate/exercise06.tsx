/*
6. Previous State Update (Important!)
Counter with:
"+1"
"+5" button

👉 Must use:
setCount(prev => prev + 5);

👉 Focus:
Why direct update can break:
setCount(count + 1); // ❌ sometimes buggy
*/

import { Colors } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise06() {
    const [count, setCount] = useState(0);

    function handleClick(type: 'increment1' | 'increment5') {
        if(type === 'increment1') {
            setCount(count + 1);
        }
        else {
            setCount(prevCount => prevCount + 1);
            setCount(prevCount => prevCount + 1);
            setCount(prevCount => prevCount + 1);
            setCount(prevCount => prevCount + 1);
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => handleClick('increment1')}>
                    <Text style={style.buttonText}>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => handleClick('increment5')}>
                    <Text style={style.buttonText}>+5</Text>
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