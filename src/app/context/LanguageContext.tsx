import { createContext, ReactNode, useContext, useState } from "react";

export type languageValues = 'pt' | 'en';

export interface LanguageContextProps {
    transcript: string,
    language: languageValues,
    subtitle: languageValues,
    setTranscript: (value: string) => void,
    toggleLanguage: (value: languageValues) => void,
    toggleSubtitle: (value: languageValues) => void
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const useLanguageContext = () => useContext(LanguageContext);

export interface LanguagemContextProviderProps {
    children: ReactNode;
}

export const LanguagemProvider = ({ children }: LanguagemContextProviderProps) => {

    const [transcript, setTranscript] = useState('');
    const [languageState, setLanguage] = useState<languageValues>('pt');
    const [subtitleState, setSubtitle] = useState<languageValues>('pt');

    return (
        <LanguageContext.Provider value={{
            transcript,
            language: languageState,
            subtitle: subtitleState,
            setTranscript,
            toggleLanguage: setLanguage,
            toggleSubtitle: setSubtitle
        }}>
            {children}
        </LanguageContext.Provider>
    )
}