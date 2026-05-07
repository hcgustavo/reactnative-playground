/*
3. Measure a View
Goal

Measure component dimensions.

Requirements

Create a colored View.

Use:

ref.current.measure()

inside useLayoutEffect.

Display:

width
height
x
y

on screen.
*/

import { Colors } from "@/constants/theme";
import { useLayoutEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

export default function Exercise03() {
    const viewRef = useRef<View>(null);

    useLayoutEffect(() => {
        viewRef.current?.measure((x,y,w,h) => {
            console.log(x,y,w,h)
        })
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View ref={viewRef} style={{ flexDirection: 'row', width: 100, height: 100, justifyContent: 'space-around', backgroundColor: 'red' }}>
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