/*
4. Async Flow (Loading / Success / Error)

This is very important for API calls (you use this a lot)

Goal

Simulate API fetch with states:

loading
success
error
State Example
{
  loading: false,
  data: null,
  error: null
}
Actions
{ type: 'FETCH_START' }
{ type: 'FETCH_SUCCESS', payload: data }
{ type: 'FETCH_ERROR', payload: error }

👉 Bonus:
Connect to a real API using fetch or axios
*/

import { Colors } from "@/constants/theme";
import { useReducer } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ApiState = {
    loading: boolean;
    data: any;
    error: string | null;
}

const initialApiState = {
    loading: false,
    data: null,
    error: null
} as ApiState

function apiReducer(apiState: ApiState, action: { type: 'FETCH_START' | 'FETCH_SUCCESS' | 'FETCH_ERROR', payload?: any }): ApiState {
    switch (action.type) {
        case 'FETCH_START': {
            return { ...initialApiState, loading: true }
        }

        case 'FETCH_SUCCESS': {
            return { loading: false, data: action.payload, error: null }
        }

        case 'FETCH_ERROR': {
            return { loading: false, data: null, error: action.payload }
        }

        default:
            return apiState;
    }
}

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ name: 'Gustavo', city: 'Montreal', country: 'Canada' }), 3000)
    })
}


export default function Exercise04() {
    const [apiState, dispatch] = useReducer(apiReducer, initialApiState);

    async function handleFetchData() {
        dispatch({ type: 'FETCH_START' });
        try {
            const result = await fetchData();
            dispatch({ type: 'FETCH_SUCCESS', payload: result });
        } catch (error: any) {
            dispatch({ type: 'FETCH_ERROR', payload: 'An error occurred' })
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {
                !apiState.error
                ?
                <Text style={{ marginVertical: 15, color: 'grey' }}>{apiState.data ? JSON.stringify(apiState.data) : 'No data'}</Text>
                :
                <Text style={{ marginVertical: 15, color: 'red' }}>{apiState.error}</Text>
            }
            <TouchableOpacity 
            disabled={apiState.loading}
            style={[style.button, { marginTop: 15, opacity: apiState.loading ? 0.5 : 1 }]} 
            onPress={handleFetchData}
            >
                { apiState.loading && <ActivityIndicator color={'#fff'} /> }
                <Text style={style.buttonText}>{ apiState.loading ? 'Wait' : 'Fetch Data' }</Text>
            </TouchableOpacity>
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