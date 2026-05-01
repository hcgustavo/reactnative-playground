/*
4. Global Counter (Shared State)

Create a CounterContext:

count
increment()
decrement()

Tasks:

Display counter in multiple components
Update from different places

👉 Goal: Understand shared state updates
*/

import { CounterContext, CounterProvider } from "@/context/CounterContext";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Exercise04() {
    return (
        <CounterProvider>
            <Exercise04Content />
        </CounterProvider>
    )
}

function Exercise04Content() {
    return (
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 15, justifyContent: 'space-evenly' }}>
            <Card1 />
            <Card2 />
            <Card3 />
        </View>
    )
}

function Card1() {
    const { count } = useContext(CounterContext);

    return (
        <View style={{ width: 300, height: 100, borderWidth: 1, borderColor: 'blue', borderRadius: 5, padding: 15, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>
        </View>
    )
}

function Card2() {
    const { increment } = useContext(CounterContext);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 300, height: 100, borderWidth: 1, borderColor: 'green', borderRadius: 5 }}>
            <TouchableOpacity style={{ width: 100, height: 50, borderRadius: 5, backgroundColor: '#12867c', justifyContent: 'center', alignItems: 'center' }} onPress={increment}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Increment</Text>
            </TouchableOpacity>
        </View>
    )
}

function Card3() {
    const { decrement } = useContext(CounterContext);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 300, height: 100, borderWidth: 1, borderColor: 'red', borderRadius: 5 }}>
            <TouchableOpacity style={{ width: 100, height: 50, borderRadius: 5, backgroundColor: '#12867c', justifyContent: 'center', alignItems: 'center' }} onPress={decrement}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Decrement</Text>
            </TouchableOpacity>
        </View>
    )
}