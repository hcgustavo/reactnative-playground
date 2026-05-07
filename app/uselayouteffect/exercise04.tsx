/*
4. Auto-Scroll Without Flicker
Goal

Prevent visible jumping.

Requirements

Create a chat-like screen using:

ScrollView
many messages
button to add a message

When a message is added:

scroll automatically to bottom
Constraint

Use useLayoutEffect.

Compare

Try the same with useEffect.

Notice the visual difference.
*/

import { Colors } from "@/constants/theme";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Exercise04() {
    const scrollViewRef = useRef<ScrollView>(null);
    const [messages, setMessages] = useState([...Array(150).fill('Bla bla bla')])

    useLayoutEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages])

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <ScrollView ref={scrollViewRef} style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }}>
                {
                    messages.map((m, idx) => (
                        <Text style={style.messageText} key={idx}>{m}</Text>
                    ))
                }
            </ScrollView>
            <TextInput
            style={style.textInput}
            onSubmitEditing={(e) => {
                setMessages([...messages, e.nativeEvent.text])
                scrollViewRef.current?.scrollToEnd({ animated: true });
            }}
            submitBehavior="submit"
            />
        </SafeAreaView>
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
    },

    messageText: {
        width: 250,
        height: 60,
        backgroundColor: '#3fa8e1',
        color: '#fff',
        padding: 10,
        marginVertical: 15,
        borderRadius: 10
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})