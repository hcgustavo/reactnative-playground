/*
2. Latest Username in WebSocket

Simulate a websocket connection:

connectToServer()

You have:

username
roomId

Requirements:

reconnect ONLY when roomId changes
incoming messages must always use latest username

Without useEffectEvent, changing username would reconnect the socket.

Prevent that.
*/

import { Colors } from "@/constants/theme";
import { connectToServer } from "@/utils/messaging-socket-mock";
import { useEffect, useEffectEvent, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Exercise02() {
    const [roomId, setRoomId] = useState('1');
    const [user, setUser] = useState('gustavo');

    const onMessage = useEffectEvent((message: string) => {
        console.log(`Message arrived for user ${user}: ${message}`)
    })

     
    useEffect(() => {
        const connection = connectToServer(roomId);

        connection.onMessage((msg) => {
            onMessage(msg);
        })
        
        return () => connection.disconnect();
    }, [roomId])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{'Chat'}</Text>
            <TextInput
                style={style.textInput}
                placeholder="User"
                onSubmitEditing={(e) => {
                    setUser(e.nativeEvent.text)
                }}
            />

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around', marginTop: 25 }}>
                <TouchableOpacity style={style.button} onPress={() => setRoomId('1')}>
                    <Text style={style.buttonText}>Room 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => setRoomId('2')}>
                    <Text style={style.buttonText}>Room 2</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 16, color: 'blue', marginTop: 25 }}>{`Connected to Room ${roomId}. Current user: ${user}`}</Text>
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
        fontSize: 18
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})