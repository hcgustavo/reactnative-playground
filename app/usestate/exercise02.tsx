/*
2. Toggle Visibility
Show/hide a <Text> when pressing a button

👉 Example idea:
Button text changes between "Show" / "Hide"

👉 Focus:
Boolean state (true/false)
*/

import { Colors } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise02() {
    const [isTextVisible, setIsTextVisible] = useState(true);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {
                isTextVisible &&
                <Text style={{ fontSize: 42, color: 'blue' }}>Hello, world!</Text>
            }

            <TouchableOpacity style={style.button} onPress={() => setIsTextVisible(!isTextVisible)}>
                <Text style={style.buttonText}>
                    { isTextVisible ? 'Hide' : 'Show' }
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
    }
})