/*
5. Fetch Data on Mount

Fetch data from:

https://jsonplaceholder.typicode.com/posts/1

Display the title.

👉 Goal:

Async inside useEffect
Loading state
*/

import { Colors } from "@/constants/theme";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

async function getPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
            })
            .catch(error => {
                throw error;
            })
}

export default function Exercise05() {
    const [content, setContent] = useState('');

    useEffect(() => {
        async function loadPost() {
            const post = await getPost();
            setContent(post);
        }

        loadPost();
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 12, color: 'blue', margin: 25 }}>{content && JSON.stringify(content)}</Text>
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