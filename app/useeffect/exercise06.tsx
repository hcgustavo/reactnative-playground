/*
6. React to Prop Changes

Create a parent that passes a userId prop.

Child component:

Fetch user data when userId changes

👉 Goal:

Dependency on props
*/

import { Colors } from "@/constants/theme";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

async function getUser(userId: string) {
    if (!userId) {
        return Promise.resolve('No userId provided');
    }

    return fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch(error => {
            throw error;
        })
}

export default function Exercise06() {
    const [userId, setUserId] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput
            style={style.textInput}
            onSubmitEditing={(e) => {
                setUserId(e.nativeEvent.text)
            }}
            autoFocus
            />
            <User userId={userId} />
        </View>
    )
}

type UserProps = {
    userId: string;
}

function User({ userId }: UserProps) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(userId)
            .then(setUser)
            .catch(console.error)
    }, [userId])

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