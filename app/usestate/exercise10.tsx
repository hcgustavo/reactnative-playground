/*
10. Dynamic Form Fields (🔥 matches your project)
Fetch fake fields:
['name', 'email', 'phone']
Build inputs dynamically
Store values in state

👉 Expected state:
{
  name: '',
  email: '',
  phone: ''
}

👉 Focus:
Dynamic keys in state
Updating unknown fields
*/

import { Colors } from "@/constants/theme";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const getDynamicFields = () => new Promise<string[]>((resolve, _) => {
    setTimeout(() => {
        resolve(['name', 'email', 'city'])
    }, 1000)
})

export default function Exercise10() {
    const [dynamicFields, setDynamicFields] = useState<Record<string, string>>({});

    useEffect(() => {
        getDynamicFields()
            .then(result => {
                let fields = {};
                for (let f of result) {
                    fields = {
                        ...fields,
                        [f]: ''
                    }
                }
                setDynamicFields(fields);
            })
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
            {
                Object.keys(dynamicFields).map(k => (
                    <TextInput
                        key={k}
                        style={[style.textInput, { marginTop: 15 }]}
                        placeholder={k.toUpperCase()}
                        onChangeText={(text) => {
                            setDynamicFields(prev => ({...prev, [k]: text}))
                        }}
                    />
                ))
            }
            {
                Object.keys(dynamicFields).length > 0 &&
                <TouchableOpacity 
                style={[style.button, { marginTop: 15 }]} 
                onPress={() => {
                    let resultText = '';
                    const keys = Object.keys(dynamicFields);
                    for(let k of keys) {
                        resultText += `${k}: ${dynamicFields[k]}, `
                    }
                    alert(resultText);
                }}
                >
                    <Text style={style.buttonText}>Send</Text>
                </TouchableOpacity>
            }
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