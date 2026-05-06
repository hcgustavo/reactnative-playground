/*
4. Form validation trigger

Child = Form component with multiple inputs

Expose:

validate(): boolean
getValues(): FormData

👉 Parent:

Press "Submit"
Calls validate()
If valid → logs values
*/

import { Colors } from "@/constants/theme";
import { useImperativeHandle, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

export default function Exercise04() {
    const ref = useRef<any>(null);

    function handleSubmit() {
        if(ref?.current?.validate()) {
            console.log(ref?.current?.getValues())
        } else {
            console.log('Form not valid')
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <MyForm ref={ref} />
            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around', marginTop: 15 }}>
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                    <Text style={style.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

type MyFormProps = TextInputProps & {
    ref?: any
}

function MyForm({ ref, ...rest }: MyFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')

    useImperativeHandle(ref, () => {
        return {
            validate() {
                return name.length > 2 && email.includes('@') && phoneNumber.length === 10
            },

            getValues() {
                return { name, email, phoneNumber }
            }
        }
    })

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TextInput style={style.textInput} placeholder="Name" value={name} onChangeText={setName} />
            <TextInput style={style.textInput} placeholder="Email" value={email} onChangeText={setEmail}  />
            <TextInput style={style.textInput} placeholder="Phone number" value={phoneNumber} onChangeText={setPhoneNumber}  />
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
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5,
        marginVertical: 15
    }
})