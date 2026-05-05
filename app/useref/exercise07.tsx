/*
7. Global Scanner Input Buffer (your real-world case 👀)

Simulate barcode input:

Characters come one by one

👉 Use a ref to:

accumulate characters
detect end (e.g. \n or timeout)

Then:

process full scan

💡 This matches your scanner gun problem perfectly
*/

import { Colors } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercise07() {
    const theme = useTheme();
    const barCodeBuffer = useRef('');
    const timeoutId = useRef<number | null>(null);
    const [barcode, setBarcode] = useState('');

    function processIncomingText(text: string) {
        if(timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }

        barCodeBuffer.current += text[text.length -1];

        timeoutId.current = setTimeout(() => {
            setBarcode(barCodeBuffer.current);
        }, 1000)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput
            value={barcode}
            autoFocus
            style={[style.textInput, { color: theme.colors.text }]}
            onChangeText={processIncomingText}
            keyboardType="number-pad"
            />
            <Text style={{ fontSize: 12, color: 'blue', marginTop: 15 }}>{'Processed barcode: ' + barcode}</Text>
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