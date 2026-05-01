import { createContext, ReactNode, useState } from "react";

export const CounterContext = createContext({ count: 0, increment: () => {}, decrement: () => {} });

type CounterProviderProps = {
    children: ReactNode;
}

export function CounterProvider({ children }: CounterProviderProps) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )
}