/*
7. Array State (Todo List)
Add items to a list
Display with FlatList
Remove items

👉 Focus:
Updating arrays:
setTodos(prev => [...prev, newItem]);
*/

import { Colors } from "@/constants/theme";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

type Todo = {
    id: string;
    title: string;
}

export default function Exercise07() {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(title: string) {
        const newTodo = { id: Date.now().toString(), title: title };
        setTodos(prevTodos => ([...prevTodos, newTodo]));
    }

    function removeTodo(id: string) {
        const updatedTodos = todos.filter(t => t.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
            <TextInput
            style={style.textInput}
            onSubmitEditing={(e) => {
                addTodo(e.nativeEvent.text)
            }}
            autoFocus
            />

            <FlatList
            data={todos}
            keyExtractor={(item, _) => item.id}
            renderItem={({ item, index }) => (
                <Text 
                style={{ fontSize: 12, color: 'black', marginVertical: 5 }}
                onPress={() => removeTodo(item.id)}
                >
                    {item.title}
                </Text>
            )}
            />
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