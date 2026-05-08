/*
3. Barcode Scanner Listener

Very realistic React Native case.

Simulate:

scanner.addListener(callback)

State:

currentWarehouse
selectedOrder

Requirements:

scanner listener added only once
scans must always use latest warehouse/order
avoid stale values

This mirrors real Zebra/Datalogic scanner problems.
*/

import { Colors } from "@/constants/theme";
import { Scanner } from "@/utils/scanner-mock";
import { useEffect, useEffectEvent, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Exercise03() {
    const [currentWarehouse, setCurrentWarehouse] = useState('WH01');
    const [selectedOrder, setSelectedOrder] = useState('ORD001');

    const onScan = useEffectEvent((scannedStr: string) => {
        console.log(`Barcode ${scannedStr} was scanned for order ${selectedOrder} located on the warehouse ${currentWarehouse}`)
    })

    useEffect(() => {
        const sub = Scanner.addEventListener('scanned', (scannedStr) => {
            onScan(scannedStr);
        })

        return () => sub.cancel();
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{'Chat'}</Text>
            <TextInput
                style={style.textInput}
                placeholder="Order"
                onSubmitEditing={(e) => {
                    setSelectedOrder(e.nativeEvent.text)
                }}
            />

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around', marginTop: 25, paddingHorizontal: 15 }}>
                <TouchableOpacity style={style.button} onPress={() => setCurrentWarehouse('WH01')}>
                    <Text style={style.buttonText}>Warehouse 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => setCurrentWarehouse('WH02')}>
                    <Text style={style.buttonText}>Warehouse 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => setCurrentWarehouse('WH03')}>
                    <Text style={style.buttonText}>Warehouse 3</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 16, color: 'blue', marginTop: 25 }}>{`Warehouse: ${currentWarehouse} | Order: ${selectedOrder}`}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        width: 100,
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