/*
2. User Context (Global User Info)

Create a UserContext:

{ name: 'Gustavo', isLoggedIn: true }

Tasks:

Show username in multiple screens/components
Conditionally render:
"Welcome Gustavo"
OR "Please login"

👉 Goal: Avoid prop drilling
*/

import { Colors } from "@/constants/theme";
import { createContext, ReactNode, useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserContext = createContext({ name: 'Gustavo', isLoggedIn: false, logout: () => { }, login: () => { } });

type UserProviderProps = {
    children: ReactNode
}

function UserProvider({ children }: UserProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <UserContext.Provider value={{ name: 'Gustavo', isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

function Exercise02Content() {
    const [count, setCount] = useState(0);
    const { name, isLoggedIn } = useContext(UserContext);

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
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, color: 'blue' }}>{count}</Text>

            <View style={{ flexDirection: 'row', width: 500, justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.button} onPress={() => handleClick('increment')}>
                    <Text style={style.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => handleClick('decrement')}>
                    <Text style={style.buttonText}>-</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 42, color: 'blue' }}>{name} is {isLoggedIn ? 'logged' : 'not logged'}</Text>

            <LoginComponent />
            <LogoutComponent />
        </View>
    )
}

function LoginComponent() {
    const { login } = useContext(UserContext)
    return (
        <TouchableOpacity style={style.button} onPress={login}>
            <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
    )
}

function LogoutComponent() {
    const { logout } = useContext(UserContext)
    return (
        <TouchableOpacity style={style.button} onPress={logout}>
            <Text style={style.buttonText}>Logout</Text>
        </TouchableOpacity>
    )
}

export default function Exercise02() {
    return (
        <UserProvider>
            <Exercise02Content />
        </UserProvider>
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