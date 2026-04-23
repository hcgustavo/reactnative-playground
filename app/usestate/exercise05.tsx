/*
5. Object State (Form Refactor)

Instead of multiple states:

const [form, setForm] = useState({
  name: '',
  email: '',
});
Update fields dynamically

👉 Challenge:
Write a reusable handleChange(field, value)

👉 Focus:
Updating nested state safely
*/

import { Colors } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Exercise05() {
    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    function handleChange(field: 'name' | 'email', value: string) {
        if(field === 'name') {
            setForm(prev => {
                return { ...prev, name: value }
            })
        }
        else if(field === 'email') {
            setForm(prev => {
                return { ...prev, email: value }
            })
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
            <TextInput
                style={style.textInput}
                placeholder="Name"
                autoFocus
                onChangeText={(text) => handleChange('name', text)}
            />
            <TextInput
                style={[style.textInput, { marginTop: 25 }]}
                placeholder="Email"
                onChangeText={(text) => handleChange('email', text)}
            />
            <TouchableOpacity style={[style.button, { marginTop: 25 }]} onPress={() => alert(`Name: ${form.name} | Email: ${form.email}`)}>
                <Text style={style.buttonText}>
                    Send
                </Text>
            </TouchableOpacity>
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