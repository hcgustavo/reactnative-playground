/*
5. Global Toast / Notification system

Create <Toast />

Expose:

show(message: string)
hide()

👉 Parent (or multiple screens):

Can trigger toast without passing props down

💡 This is how many libraries work internally
*/

import { Colors } from "@/constants/theme";
import { useImperativeHandle, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

export default function Exercise05() {
    const formRef = useRef<any>(null);
    const toastRef = useRef<any>(null);

    function handleSubmit() {
        if (formRef?.current?.validate()) {
            console.log(formRef?.current?.getValues())
            toastRef?.current?.show('info', JSON.stringify(formRef?.current?.getValues()), 2000)
        } else {
            toastRef?.current?.show('error', 'Form not valid', 2000)
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <MyForm ref={formRef} />
            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around', marginTop: 15 }}>
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                    <Text style={style.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <Toast ref={toastRef} />
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
            <TextInput style={style.textInput} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={style.textInput} placeholder="Phone number" value={phoneNumber} onChangeText={setPhoneNumber} />
        </View>
    )
}


type ToastProps = {
    ref?: any
}

function Toast({ ref }: ToastProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'info' | 'error'>('info');

    useImperativeHandle(ref, () => {
        return {
            show(type: 'info' | 'error' = 'info', message: string, durationMs = 3000) {
                setType(type);
                setMessage(message);
                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false);
                }, durationMs)
            },

            hide() {
                setIsVisible(false);
                setMessage('');
            }
        }
    })
    return isVisible ?
                    <View style={[style.toast, { backgroundColor: type === 'info' ? '#5499b0' : '#cf4c4c', borderColor: type === 'info' ?  '#0485b0' : '#ce0000' }]}>
                        <Text style={style.toastMessage}>{message}</Text>
                    </View>
                    : 
                    null
    
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
    },

    toast: {
        width: 300,
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        margin: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    toastMessage: {
        color: '#fff',
        fontSize: 12
    }
})