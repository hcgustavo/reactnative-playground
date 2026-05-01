import { createContext, ReactNode, useState } from "react";

export const Exercise05CountContext = createContext({ count: 0, setCount: (count: number) => {} });
export const Exercise05TextContext = createContext({ text: "Test", setText: (text: string) => {} });

type Exercise05ProviderProps = {
    children: ReactNode
}
export function Exercise05Provider({ children }: Exercise05ProviderProps) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Test");

    return (
        <Exercise05CountContext.Provider value={{ count, setCount }}>
            <Exercise05TextContext.Provider value={{ text, setText }}>
                {children}
            </Exercise05TextContext.Provider>
        </Exercise05CountContext.Provider>
    )
}