/*
8. Modal with Return Value (Your exact use case)
Screen A opens Modal
Modal selects a value
Returns it to Screen A

👉 Constraints:
Use useState
No Redux

👉 Focus:
Passing setters as props
Immediate value usage
*/

import Form from "@/components/Form";
import { Colors } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise08() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: 'blue' }}>{'Name: ' + name}</Text>
            <Text style={{ fontSize: 16, color: 'blue' }}>{'Age: ' + age}</Text>


            <TouchableOpacity style={style.button} onPress={() => setIsModalVisible(true)}>
                <Text style={style.buttonText}>Open Modal</Text>
            </TouchableOpacity>

            <Form
            visible={isModalVisible}
            onClose={() => setIsModalVisible(false)} 
            setName={setName}
            setAge={setAge}
            />
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        width: 75,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 12
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})