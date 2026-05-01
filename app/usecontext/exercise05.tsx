/*
5. Performance Problem (Very important ⚠️)

Create a context with:

{ count, text }

Tasks:

Update count
Notice: ALL components re-render

👉 Fix it by:

Splitting contexts
OR
Memoizing values

👉 This is a real-world issue
*/

import { Exercise05CountContext, Exercise05Provider, Exercise05TextContext } from "@/context/Exercise05Context";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Exercise05() {
    return (
        <Exercise05Provider>
            <Exercise05Content />
        </Exercise05Provider>
    )
}

function Exercise05Content() {
    return (
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 15, justifyContent: 'space-evenly' }}>
            <Card1 />
            <Card2 />
            <Card3 />
        </View>
    )
}

function Card1() {
    const { count } = useContext(Exercise05CountContext);

    console.log('Render Card1');

    return (
        <View style={{ width: 300, height: 100, borderWidth: 1, borderColor: 'blue', borderRadius: 5, padding: 15, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, color: 'blue' }}>{count}</Text>
        </View>
    )
}

function Card2() {
    const { text } = useContext(Exercise05TextContext);

    console.log('Render Card2');

    return (
        <View style={{ width: 300, height: 100, borderWidth: 1, borderColor: 'green', borderRadius: 5, padding: 15, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, color: 'blue' }}>{text}</Text>
        </View>
    )
}

function Card3() {
    const { setCount } = useContext(Exercise05CountContext);
    const { setText } = useContext(Exercise05TextContext);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 300, height: 100, borderWidth: 1, borderColor: 'red', borderRadius: 5 }}>
            <TouchableOpacity style={{ width: 100, height: 50, borderRadius: 5, backgroundColor: '#12867c', justifyContent: 'center', alignItems: 'center' }} onPress={() => setCount(Math.round(Math.random() * 100))}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Change count</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 50, borderRadius: 5, backgroundColor: '#12867c', justifyContent: 'center', alignItems: 'center' }} onPress={() => setText(Date.now().toString())}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Change text</Text>
            </TouchableOpacity>
        </View>
    )
}