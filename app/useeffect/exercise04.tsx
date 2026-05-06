/*
4. Timer with Cleanup

Create a timer that:

Increments every second
Stops when component unmounts

👉 Bonus:

Add a button to pause/resume
*/

import { Colors } from "@/constants/theme";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercise04() {
    const [count, setCount] = useState(0);
    const isCounterRunningRef = useRef(false);
    const intervalIdRef = useRef<number | null>(null);

    function startCounter() {
        if (isCounterRunningRef.current === false) {
            isCounterRunningRef.current = true;
            intervalIdRef.current = setInterval(() => {
                console.log('Running interval')
                setCount(prevCount => prevCount + 1);
            }, 1000)
        }
    }

    function pauseCounter() {
        if(intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            isCounterRunningRef.current = false;
        }
    }

    function handleClick(type: 'pause' | 'resume') {
        if(type === 'pause') {
            pauseCounter();
        }
        else {
            startCounter();
        }
    }

    useEffect(() => {
        startCounter();

        return () => {
            if(intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        }
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => handleClick('pause')}>
                    <Text style={style.buttonText}>Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => handleClick('resume')}>
                    <Text style={style.buttonText}>Resume</Text>
                </TouchableOpacity>
            </View>
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
        fontSize: 18
    }
})