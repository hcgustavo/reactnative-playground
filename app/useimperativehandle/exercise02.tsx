/*
2. Control internal state

Child has a counter (useState).

Expose:

increment()
reset()

👉 Parent buttons should control the child counter.
*/

import { Colors } from "@/constants/theme";
import { useImperativeHandle, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise02() {
    const ref = useRef<any>(null);

    function handleClick(type: string) {
        if(type === 'increment') {
            ref?.current?.increment();
        } else {
            ref?.current?.decrement();
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Counter ref={ref} />
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

type CounterProps = {
    ref: any
}

function Counter({ ref }: CounterProps) {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            increment() {
                setCount(count + 1);
            },

            decrement() {
                setCount(count - 1);
            }
        }
    })

    return (
        <View ref={counterRef}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>
        </View>
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