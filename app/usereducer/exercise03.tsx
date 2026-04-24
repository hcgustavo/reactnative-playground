/*
3. Form Handling (Real RN Scenario)

Perfect for your kind of apps (forms, validation, etc.)

Goal
Manage a form with:
name
email
password

State Example
{
  values: { name: '', email: '', password: '' },
  errors: {},
  touched: {}
}

Actions
{ type: 'UPDATE_FIELD', field: 'email', value: '...' }
{ type: 'SET_ERROR', field: 'email', error: 'Invalid email' }
{ type: 'RESET_FORM' }

👉 Bonus:
Validate on blur
Disable submit if invalid
*/

import { Colors } from "@/constants/theme";
import { useReducer } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type FormState = {
    values: { name: string, email: string, password: string },
    errors: any,
    touched: any
}

const initialFormState = {
    values: { name: '', email: '', password: '' },
    errors: {},
    touched: {}
} as FormState

function formReducer(formState: FormState, action: { type: 'UPDATE_FIELD' | 'SET_ERROR' | 'RESET_FORM', field?: 'name' | 'email' | 'password', value?: string, error?: string }): FormState {
    switch (action.type) {
        case 'UPDATE_FIELD':
            if (action.field) {
                return { ...formState, values: { ...formState.values, [action.field]: action.value } };
            }
            return formState;

        case 'SET_ERROR':
            if (action.field) {
                if (!action.error) {
                    const { [action.field]: _, ...restErrors } = formState.errors;
                    return { ...formState, errors: restErrors };
                }
                return { ...formState, errors: { ...formState.errors, [action.field]: action.error } }
            }
            return formState;

        case 'RESET_FORM':
            return initialFormState;

        default:
            return formState;
    }
}

export default function Exercise03() {
    const [formState, dispatch] = useReducer(formReducer, initialFormState)

    function isFormValid() {
        if (Object.keys(formState.errors).length > 0 || (!formState.values.name && !formState.values.email && !formState.values.password)) {
            return false;
        }
        return true;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput
                style={style.textInput}
                value={formState.values.name}
                onChangeText={(text) => dispatch({ type: 'UPDATE_FIELD', field: 'name', value: text })}
                onBlur={() => {
                    if (!formState.values.name) {
                        dispatch({ type: 'SET_ERROR', field: 'name', error: 'Name must not be empty' })
                    } else {
                        dispatch({ type: 'SET_ERROR', field: 'name', error: undefined })
                    }
                }}
                placeholder="Name"
            />
            {formState.errors.name && <Text style={{ fontSize: 11, color: 'red' }}>{formState.errors.name}</Text>}

            <TextInput
                style={style.textInput}
                value={formState.values.email}
                onChangeText={(text) => dispatch({ type: 'UPDATE_FIELD', field: 'email', value: text })}
                onBlur={() => {
                    if (!formState.values.email) {
                        dispatch({ type: 'SET_ERROR', field: 'email', error: 'Email must not be empty' })
                    }
                    else if (!formState.values.email.includes('@')) {
                        dispatch({ type: 'SET_ERROR', field: 'email', error: 'Email must contain @' })
                    } else {
                        dispatch({ type: 'SET_ERROR', field: 'email', error: undefined })
                    }
                }}
                placeholder="Email"
            />
            {formState.errors.email && <Text style={{ fontSize: 11, color: 'red' }}>{formState.errors.email}</Text>}

            <TextInput
                style={style.textInput}
                value={formState.values.password}
                onChangeText={(text) => dispatch({ type: 'UPDATE_FIELD', field: 'password', value: text })}
                onBlur={() => {
                    if (!formState.values.password) {
                        dispatch({ type: 'SET_ERROR', field: 'password', error: 'Password must not be empty' })
                    }
                    else if (formState.values.password.length < 8) {
                        dispatch({ type: 'SET_ERROR', field: 'password', error: 'Password must have at least 8 characters' })
                    } else {
                        dispatch({ type: 'SET_ERROR', field: 'password', error: undefined })
                    }
                }}
                placeholder="Password"
                secureTextEntry
            />
            {formState.errors.password && <Text style={{ fontSize: 11, color: 'red' }}>{formState.errors.password}</Text>}

            <TouchableOpacity
                style={[style.button, { marginTop: 15, opacity: !isFormValid() ? 0.5 : 1 }]}
                onPress={() => { alert(`Sent ${JSON.stringify(formState.values)}`) }}
                disabled={!isFormValid()}
            >
                <Text style={style.buttonText}>Send</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[style.button, { marginTop: 15 }]} onPress={() => { dispatch({ type: 'RESET_FORM' }) }}>
                <Text style={style.buttonText}>Reset</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 11, color: 'grey', marginTop: 50 }}>
                {JSON.stringify(formState)}
            </Text>

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
        fontSize: 14
    },

    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5,
        marginVertical: 10
    }
})