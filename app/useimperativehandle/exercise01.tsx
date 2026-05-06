/*
1. Trigger a function inside child

Create a child component with a button and a hidden function:

👉 Parent should be able to call:

childRef.current.sayHello()
Requirements:
Use forwardRef
Use useImperativeHandle
Function logs "Hello from child"
*/

import { Colors } from "@/constants/theme";
import { useImperativeHandle, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export default function Exercise01() {
    const ref = useRef<any>(null);

    function handlePress() {
        ref?.current?.sayHello();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <MyButton ref={ref} onPress={handlePress} />
            </View>
        </View>
    )
}

type MyButtonProps = TouchableOpacityProps & {
    ref: any
}

function MyButton({ ref, ...rest }: MyButtonProps) {
    const myButtonRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            sayHello() {
                console.log('Hello')
            }
        }
    })
    return (
        <TouchableOpacity {...rest} ref={myButtonRef} style={style.button}>
            <Text style={style.buttonText}>Click me</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 22
    }
})