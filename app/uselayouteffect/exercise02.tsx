/*
2. Change Header Title Immediately
Goal

Use useLayoutEffect with React Navigation.

Requirements

Create a screen with a counter.

Update the navigation title like:

Counter: 5

using:

navigation.setOptions()
Constraint

Do it with useLayoutEffect, not useEffect.
*/

import { Colors } from "@/constants/theme";
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise02() {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();

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

    // useEffect(() => {
    //     navigation.setOptions({
    //         title: 'Count: ' + count
    //     })
    // }, [navigation, count])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Count: ' + count
        })
    }, [navigation, count])

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