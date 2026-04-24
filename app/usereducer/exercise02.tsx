/*
2. Todo List (CRUD with Reducer)

This is the classic useReducer use case

Goal

Create a todo list where you can:

Add task
Toggle completed
Delete task

State Example
{
  todos: []
}
Actions
{ type: 'ADD_TODO', payload: { id, text } }
{ type: 'TOGGLE_TODO', payload: id }
{ type: 'DELETE_TODO', payload: id }

👉 Bonus:
Add "edit todo"
*/

import { Colors } from "@/constants/theme";
import { useReducer, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

function createTodo(text: string) {
    return {
        id: Date.now().toString(),
        text,
        completed: false
    } as Todo
}

function todosReducer(todos: Todo[], action: { type: 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETE_TODO' | 'EDIT_TODO', payload: Todo | string | { id: string, newText: string } }) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todos, action.payload as Todo];

        case 'TOGGLE_TODO': {
            const foundTodoIndex = todos.findIndex(t => t.id === action.payload);
            if(foundTodoIndex > -1) {
                const newTodos = [...todos];
                newTodos[foundTodoIndex].completed = !newTodos[foundTodoIndex].completed;
                return newTodos;
            }
            return todos;
        }

        case 'DELETE_TODO':
            return todos.filter(t => t.id !== action.payload);

        case 'EDIT_TODO': {
            const _payload = action.payload as { id: string, newText: string };
            const foundTodoIndex = todos.findIndex(t => t.id === _payload.id);
            if(foundTodoIndex > -1) {
                const newTodos = [...todos];
                newTodos[foundTodoIndex].text = _payload.newText;
                return newTodos;
            }
            return todos;
        }

        default:
            return todos;
    }
}


export default function Exercise02() {
    const [todos, dispatch] = useReducer(todosReducer, []);
    const [inputText, setInputText] = useState('');

    function handleAddTodo() {
        if(inputText) {
            dispatch({ type: 'ADD_TODO', payload: createTodo(inputText) })
        }
    }

    function handleDeleteTodo(id: string) {
        dispatch({ type: 'DELETE_TODO', payload: id })
    }

    function handleToggleTodo(id: string) {
        dispatch({ type: 'TOGGLE_TODO', payload: id })
    }

    function handleEditTodo(id: string, newText: string) {
        dispatch({ type: 'EDIT_TODO', payload: { id, newText } })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput
                value={inputText}
                onChangeText={setInputText}
                style={style.textInput}
                placeholder="Enter todo..."
            />
            <TouchableOpacity style={[style.button, { marginTop: 15 }]} onPress={handleAddTodo}>
                <Text style={style.buttonText}>Add todo</Text>
            </TouchableOpacity>

            <FlatList
                data={todos}
                keyExtractor={(item, _) => item.id}
                renderItem={({ item, index }) => (
                    <Text 
                    style={{ fontSize: 14, color: 'black', marginTop: 10, textDecorationLine: item.completed ? 'line-through' : 'none' }} 
                    onPress={() => handleDeleteTodo(item.id)}
                    onLongPress={() => handleToggleTodo(item.id)}
                    >
                        {item.text}
                    </Text>
                )}
            />
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
        padding: 5
    }
})