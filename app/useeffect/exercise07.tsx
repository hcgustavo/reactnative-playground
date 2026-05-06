/*
7. Debounced Effect

Simulate a search input:

User types text
Only trigger API call after 500ms of no typing

👉 Goal:

setTimeout + cleanup
*/

import { Colors } from "@/constants/theme";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

async function getUserByUsername(username: string) {
    return fetch('https://jsonplaceholder.typicode.com/users?username=' + username)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch(error => {
            throw error;
        })
}

export default function Exercise07() {
    const [username, setUsername] = useState('');
    const timeoutIdRef = useRef<number | null>(null);

    function handleSearch(searchText: string) {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }
        timeoutIdRef.current = setTimeout(() => {
            setUsername(searchText);
        }, 1000)
    }

    useEffect(() => {
        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current)
            }
        }
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput
                style={style.textInput}
                onChangeText={handleSearch}
                autoFocus
            />
            <User username={username} />
        </View>
    )
}

type UserProps = {
    username: string;
}

function User({ username }: UserProps) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserByUsername(username)
            .then(setUser)
            .catch(console.error)
    }, [username])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 12, color: 'blue', margin: 25 }}>{user && JSON.stringify(user)}</Text>
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
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})