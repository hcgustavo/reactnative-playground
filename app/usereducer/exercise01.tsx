/*
1. Basic Counter (Reducer Fundamentals)

Start simple to understand actions + reducer flow

Goal

Build a counter with:

Increment
Decrement
Reset

Requirements
Use useReducer instead of useState

Define:
initialState
reducer(state, action)

Actions
{ type: 'INCREMENT' }
{ type: 'DECREMENT' }
{ type: 'RESET' }

👉 Bonus:
Add payload to increment by custom value
*/

import { Colors } from "@/constants/theme";
import { useReducer } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function countReducer(state: number, action: { type: string, payload?: number }) {
    switch (action.type) {
        case 'INCREMENT':
            return state + (action.payload ?? 1);
        case 'DECREMENT':
            return state - (action.payload ?? 1);
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

export default function Exercise01() {
    const [count, dispatch] = useReducer(countReducer, 0);

    const INCREMENT_BY = 1;

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => { dispatch({ type: 'INCREMENT', payload: INCREMENT_BY }) }}>
                    <Text style={style.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => { dispatch({ type: 'DECREMENT', payload: INCREMENT_BY }) }}>
                    <Text style={style.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[style.button, { marginTop: 15 }]} onPress={() => { dispatch({ type: 'RESET' }) }}>
                <Text style={style.buttonText}>Reset</Text>
            </TouchableOpacity>
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