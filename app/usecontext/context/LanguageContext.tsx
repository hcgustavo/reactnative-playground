import { createContext, ReactNode, useState } from "react";

export const LanguageContext = createContext({ language: 'en', setLanguage: (lang: string) => {} });

type LanguageProviderProps = {
    children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}