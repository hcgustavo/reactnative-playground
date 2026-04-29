/*
1. Theme Switcher (Light / Dark)

Create a ThemeContext with:

theme (light or dark)
toggleTheme()

Tasks:

Wrap your app with a ThemeProvider
Change background + text color based on theme
Add a button to toggle theme

👉 Goal: Understand Provider + useContext consumption
*/

import { Colors } from "@/constants/theme";
import { createContext, useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => { } });

type ThemeProviderProps = {
    children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function Exercise01Content() {
    const [count, setCount] = useState(0);
    const { theme, toggleTheme } = useContext(ThemeContext);

    function handleClick(type: 'increment' | 'decrement') {
        if (type === 'increment') {
            setCount(count + 1);
        }
        else {
            if (count > 0) {
                setCount(count - 1);
            }
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: theme === 'light' ? '#fff' : '#0c0824' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => handleClick('increment')}>
                    <Text style={style.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => handleClick('decrement')}>
                    <Text style={style.buttonText}>-</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[style.button, { width: 200 }]} onPress={() => toggleTheme()}>
                <Text style={style.buttonText}>Toggle theme</Text>
            </TouchableOpacity>
        </View>
    )
}

export default function Exercise01() {
    return (
        <ThemeProvider>
            <Exercise01Content />
        </ThemeProvider>
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